import fs from "fs";
import path from "path";

function deleteDir(destNextRoot: string) {
    if (fs.existsSync(destNextRoot)) {
        console.log(
            `✅Cleaning existing template directory: ${destNextRoot}\n`
        );
        fs.rmSync(destNextRoot, { recursive: true, force: true });
    }
}

export function deleteDirectories() {
    const root = path.resolve(__dirname, "..", "..", "..");

    const destNextRoot = path.join(
        root,
        "packages",
        "create-template",
        "react",
        "template",
        "next"
    );

    deleteDir(destNextRoot);

    const destTanstackRoot = path.join(
        root,
        "packages",
        "create-template",
        "template",
        "react",
        "tanstack-router"
    );

    deleteDir(destTanstackRoot);

    const destNextMacRoot = path.join(
        root,
        "execution",
        "mac",
        "tmp",
        "template",
        "react",
        "next"
    );

    deleteDir(destNextMacRoot);

    const destTanstackMacRoot = path.join(
        root,
        "execution",
        "mac",
        "tmp",
        "template",
        "react",
        "tanstack-router"
    );

    deleteDir(destTanstackMacRoot);

    const destNextWinRoot = path.join(
        root,
        "execution",
        "win",
        "tmp",
        "template",
        "react",
        "next"
    );

    deleteDir(destNextWinRoot);

    const destTanstackWinRoot = path.join(
        root,
        "execution",
        "win",
        "tmp",
        "template",
        "react",
        "tanstack-router"
    );

    deleteDir(destTanstackWinRoot);
}
