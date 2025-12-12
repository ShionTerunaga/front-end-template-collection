import path from "path";
import core from "./core";

async function tempWrite() {
    const target = path.resolve(
        __dirname,
        "..",
        "..",
        "dist",
        "react-tmp",
        "index.js"
    );

    await core(target);
}

tempWrite();
