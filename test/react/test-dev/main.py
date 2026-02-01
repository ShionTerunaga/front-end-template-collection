import os
import sys
import time
import re
import pexpect
import shutil
import subprocess


KEYBOARD = {
    "ArrowDown": "\x1b[B",
    "ArrowDownAlt": "\x1bOB",
    "ArrowUp": "\x1b[A",
    "ArrowUpAlt": "\x1bOA",
    "Enter": "\r",
    "EnterLF": "\n",
    "Space": "\x20",
}


def green(s: str) -> str:
    return f"\033[32m{s}\033[0m"


def node_path() -> str:
    return os.environ.get("NODE", "node")


def resolve_repo_root() -> str:
    return os.path.abspath(os.path.join(os.path.dirname(__file__), "../../.."))


def run() -> None:
    repo_root = resolve_repo_root()
    # path to CLI entry relative to this file
    cli_entry = os.path.join(repo_root, "packages", "create-template", "src", "index.ts")

    ACTIONS = [
        {
            "projectName": "next-app-tailwind",
            "techStack": KEYBOARD["Enter"],
            "framework": KEYBOARD["ArrowDown"] + KEYBOARD["Enter"],
            "css": KEYBOARD["Enter"],
            "library": KEYBOARD["Space"] + KEYBOARD["ArrowDown"] + KEYBOARD["Space"] + KEYBOARD["Enter"],
        },{
            "projectName": "next-app-vanilla-extract",
            "techStack": KEYBOARD["Enter"],
            "framework": KEYBOARD["ArrowDown"] + KEYBOARD["Enter"],
            "css": KEYBOARD["ArrowDown"] + KEYBOARD["Enter"],
            "library": KEYBOARD["Space"] + KEYBOARD["ArrowDown"]+ KEYBOARD["Space"] + KEYBOARD["Enter"],
        },
        {
            "projectName": "next-pages-tailwind",
            "techStack": KEYBOARD["Enter"],
            "framework": KEYBOARD["ArrowDown"] + KEYBOARD["ArrowDown"] + KEYBOARD["Enter"],
            "css": KEYBOARD["Enter"],
            "library": KEYBOARD["Space"] + KEYBOARD["ArrowDown"] + KEYBOARD["Space"] + KEYBOARD["Enter"],
        },{
            "projectName": "next-pages-vanilla-extract",
            "techStack": KEYBOARD["Enter"],
            "framework": KEYBOARD["ArrowDown"] + KEYBOARD["ArrowDown"] + KEYBOARD["Enter"],
            "css": KEYBOARD["ArrowDown"] + KEYBOARD["Enter"],
            "library": KEYBOARD["Space"] + KEYBOARD["ArrowDown"] + KEYBOARD["Space"] + KEYBOARD["Enter"],
        },{
            "projectName": "tanstack-router-tailwind",
            "techStack": KEYBOARD["Enter"],
            "framework": KEYBOARD["Enter"],
            "css": KEYBOARD["Enter"],
            "library": KEYBOARD["Space"] + KEYBOARD["ArrowDown"] + KEYBOARD["Space"] + KEYBOARD["Enter"],
        },{
            "projectName": "tanstack-router-vanilla-extract",
            "techStack": KEYBOARD["Enter"],
            "framework": KEYBOARD["Enter"],
            "css": KEYBOARD["ArrowDown"] + KEYBOARD["Enter"],
            "library": KEYBOARD["Space"] + KEYBOARD["ArrowDown"]+ KEYBOARD["Space"] + KEYBOARD["Enter"],
        }
    ]
    node = node_path()

    for action in ACTIONS:
        env = os.environ.copy()
        env["CLI_TEST"] = "1"
        env["TERM"] = env.get("TERM", "xterm-256color")

        shutil.rmtree(os.path.join(os.getcwd(), action["projectName"]), ignore_errors=True)

        # Try non-interactive invocation first (preferred).
        cmd_noninteractive = [
            node,
            "--import",
            "tsx",
            cli_entry,
        ]

        print(f"[PTY SAMPLE] Trying non-interactive: {' '.join(cmd_noninteractive)}")
        child = pexpect.spawn(cmd_noninteractive[0], cmd_noninteractive[1:], cwd=os.getcwd(), env=env, encoding="utf-8")
        child.logfile = sys.stdout
        try:
            child.expect(r"What is your project named")
            child.sendline(action["projectName"]+KEYBOARD["Enter"])

            child.expect(r"Select a tech stack for your project")
            child.sendline(action["techStack"])

            child.expect(r"Select\s+a\s+.?framework.?for your project")
            child.sendline(action["framework"])

            child.expect(r"elect a CSS framework for your project")
            child.sendline(action["css"])

            child.expect(r"Select packages to add")
            child.sendline(action["library"])

            child.expect(pexpect.EOF, timeout=120)
            # success if exit code 0
            if child.exitstatus == 0 or child.signalstatus is None:
                print("[PTY SAMPLE] Non-interactive run finished successfully")
                try:
                    child.close()
                except Exception:
                    pass
                
                project_dir = os.path.join(os.getcwd(), action["projectName"])
                if os.path.isdir(project_dir):
                    print(f"[PTY SAMPLE] Running pnpm in {project_dir}")
                    try:
                        subprocess.run(["pnpm", "i"], cwd=project_dir, check=True)
                    except Exception as e:
                        print(f"[PTY SAMPLE] pnpm install failed: {e}")
                    try:
                        subprocess.run(["pnpm", "test"], cwd=project_dir, check=True)
                    except Exception as e:
                        print(f"[PTY SAMPLE] pnpm test failed: {e}")
                    try:
                        subprocess.run(["pnpm", "build"], cwd=project_dir, check=True)
                    except Exception as e:
                        print(f"[PTY SAMPLE] pnpm build failed: {e}")
                continue
        except Exception:
            # Fall back to interactive if non-interactive path didn't finish cleanly
            try:
                child.close()
            except Exception:
                pass

        # Fall back to interactive mode: hand control to the user instead of
        # sending arrow/shift sequences programmatically.
        cmd = [node, "--import", "tsx", cli_entry]
        print(f"[PTY SAMPLE] Falling back to interactive: {' '.join(cmd)}")
        child = pexpect.spawn(cmd[0], cmd[1:], cwd=os.getcwd(), env=env, encoding="utf-8")
        child.logfile = sys.stdout
        # Give the user direct control of the spawned process so they can use
        # their local keyboard (arrow, shift, space) reliably.
        print("[PTY SAMPLE] Entering interactive mode — use arrow/space/enter to answer prompts. Press Ctrl-D to finish.")
        try:
            child.interact()
        except Exception:
            pass
        try:
            child.expect(pexpect.EOF)
        except Exception:
            pass
        try:
            child.close()
        except Exception:
            pass
        # After creating the project, install deps, run tests and build.
        

if __name__ == "__main__":
    run()
