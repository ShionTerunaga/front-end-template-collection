import path from "path";
import core from "./core";

async function upgradeWriteWin() {
    const pathName = path.resolve(
        __dirname,
        "..",
        "..",
        "dist",
        "upgrade-win",
        "index.js"
    );

    await core(pathName);
}

upgradeWriteWin();
