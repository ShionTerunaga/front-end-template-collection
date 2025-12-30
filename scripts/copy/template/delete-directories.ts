import fs from "fs";
import path from "path";

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

    if (fs.existsSync(destNextRoot)) {
        console.log(`Cleaning existing template directory: ${destNextRoot}`);
        fs.rmSync(destNextRoot, { recursive: true, force: true });
    }

    const destTanstackRoot = path.join(
        root,
        "packages",
        "create-template",
        "template",
        "react",
        "tanstack-router"
    );

    if (fs.existsSync(destTanstackRoot)) {
        console.log(
            `Cleaning existing template directory: ${destTanstackRoot}`
        );
        fs.rmSync(destTanstackRoot, { recursive: true, force: true });
    }

    const destNextMacRoot = path.join(
        root,
        "execution",
        "mac",
        "tmp",
        "template",
        "react",
        "next"
    );

    if (fs.existsSync(destNextMacRoot)) {
        console.log(`Cleaning existing template directory: ${destNextMacRoot}`);
        fs.rmSync(destNextMacRoot, { recursive: true, force: true });
    }
    const destTanstackMacRoot = path.join(
        root,
        "execution",
        "mac",
        "tmp",
        "template",
        "react",
        "tanstack-router"
    );

    if (fs.existsSync(destTanstackMacRoot)) {
        console.log(
            `Cleaning existing template directory: ${destTanstackMacRoot}`
        );
        fs.rmSync(destTanstackMacRoot, { recursive: true, force: true });
    }
    const destNextWinRoot = path.join(
        root,
        "execution",
        "win",
        "tmp",
        "template",
        "react",
        "next"
    );

    if (fs.existsSync(destNextWinRoot)) {
        console.log(`Cleaning existing template directory: ${destNextWinRoot}`);
        fs.rmSync(destNextWinRoot, { recursive: true, force: true });
    }
    const destTanstackWinRoot = path.join(
        root,
        "execution",
        "win",
        "tmp",
        "template",
        "react",
        "tanstack-router"
    );

    if (fs.existsSync(destTanstackWinRoot)) {
        console.log(
            `Cleaning existing template directory: ${destTanstackWinRoot}`
        );
        fs.rmSync(destTanstackWinRoot, { recursive: true, force: true });
    }
}
