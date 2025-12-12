import path from "path";
import core from "./core";

async function upgradeWriteMac() {
    const pathName = path.resolve(
        __dirname,
        "..",
        "..",
        "dist",
        "upgrade-mac",
        "index.js"
    );

    await core(pathName);
}

upgradeWriteMac();
