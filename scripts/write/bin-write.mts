import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import core from "./core.mts";

const __dirname = dirname(fileURLToPath(import.meta.url));

async function binWrite(): Promise<void> {
    const target = path.resolve(__dirname, "..", "..", "bin", "index.mjs");
    const legacyTarget = path.resolve(__dirname, "..", "..", "bin", "index.js");

    try {
        await fs.promises.rm(legacyTarget, { force: true });
    } catch {}

    await core(target);
}

binWrite();
