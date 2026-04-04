import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync, spawnSync } from "node:child_process";
import { pathToFileURL } from "node:url";

import { getReleaseNotes } from "./write-release-notes.mts";

function getVersion() {
    const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8")) as {
        version?: string;
    };

    if (!packageJson.version) {
        throw new Error("package.json version is required.");
    }

    return packageJson.version;
}

function getHeadSha() {
    return execFileSync("git", ["rev-parse", "HEAD"], {
        encoding: "utf8"
    }).trim();
}

function releaseExists(tag: string) {
    const result = spawnSync("gh", ["release", "view", tag], {
        stdio: "ignore"
    });
    return result.status === 0;
}

function main() {
    const version = getVersion();
    const tag = `v${version}`;
    const target = getHeadSha();
    const notesPath = path.join(
        os.tmpdir(),
        `release-notes-${tag}-${process.pid}.md`
    );

    fs.writeFileSync(notesPath, getReleaseNotes(version));

    try {
        if (releaseExists(tag)) {
            execFileSync(
                "gh",
                [
                    "release",
                    "edit",
                    tag,
                    "--title",
                    tag,
                    "--notes-file",
                    notesPath
                ],
                {
                    stdio: "inherit"
                }
            );
            return;
        }

        execFileSync(
            "gh",
            [
                "release",
                "create",
                tag,
                "--target",
                target,
                "--title",
                tag,
                "--notes-file",
                notesPath
            ],
            {
                stdio: "inherit"
            }
        );
    } finally {
        fs.rmSync(notesPath, { force: true });
    }
}

if (
    process.argv[1] &&
    import.meta.url === pathToFileURL(process.argv[1]).href
) {
    main();
}
