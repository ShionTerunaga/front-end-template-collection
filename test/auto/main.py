import argparse
import os
import platform
import shutil
from common import node_path, resolve_repo_root
from react_runner import get_actions as get_react_actions
from react_runner import react_run_action
from vue_runner import get_actions as get_vue_actions
from vue_runner import vue_run_action


def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument("tech", choices=["react", "vue"])
    parser.add_argument("mode", choices=["dev", "pack"])
    return parser.parse_args()


def resolve_cli_cmd(repo_root, mode):
    if mode == "dev":
        return [
            node_path(),
            "--import",
            "tsx",
            os.path.join(repo_root, "packages", "create-template", "src", "index.ts"),
        ]

    if platform.system() == "Windows":
        cli_entry = os.path.join(repo_root, "execution", "win", "tmp", "index.js")
    else:
        cli_entry = os.path.join(repo_root, "execution", "mac", "tmp", "index.js")
    return [node_path(), cli_entry]


def run_cli(mode, tech, repo_root, workdir):
    actions = get_react_actions() if tech == "react" else get_vue_actions()
    cli_entry = resolve_cli_cmd(repo_root, mode)
    if tech == "react":
        react_run_action(actions, cli_entry, workdir)
    else:
        vue_run_action(actions, cli_entry, workdir)

def main():
    args = parse_args()
    repo_root = resolve_repo_root()

    app_root = os.path.join(repo_root, "test", "auto", "app")
    print(f"[auto] Cleaning app root: {app_root}")
    shutil.rmtree(app_root, ignore_errors=True)
    os.makedirs(app_root, exist_ok=True)

    workdir = os.path.join(app_root, args.tech)
    os.makedirs(workdir, exist_ok=True)

    run_cli(args.mode, args.tech, repo_root, workdir)


if __name__ == "__main__":
    main()
