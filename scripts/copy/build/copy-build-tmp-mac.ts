import fs from "fs";
import path from "path";

/**
 * Copy dist/react-tmp/index.js -> execution/mac/tmp/index.js
 * If the bundle doesn't start with a shebang, add one so it can be executed.
 */
async function main() {
    const repoRoot = path.resolve(__dirname, "..", "..", "..");
    const src = path.join(repoRoot, "dist", "react-tmp", "index.js");
    const destDir = path.join(repoRoot, "execution", "mac", "tmp");
    const dest = path.join(destDir, "index.js");

    if (!fs.existsSync(src)) {
        console.error(`Source bundle not found: ${src}`);
        process.exitCode = 2;
        return;
    }

    // Ensure destination directory exists
    fs.mkdirSync(destDir, { recursive: true });

    const content = fs.readFileSync(src, "utf8");

    let out = content;
    if (!content.startsWith("#!")) {
        out = "#!/usr/bin/env node\n" + content;
    }

    try {
        fs.writeFileSync(dest, out, { encoding: "utf8" });
        try {
            fs.chmodSync(dest, 0o755);
        } catch (chmodErr) {
            console.warn(`Warning: failed to chmod ${dest}:`, chmodErr);
        }
        console.log(`Copied react-tmp bundle to: ${dest}`);
    } catch (err) {
        console.error(`Failed to copy bundle to ${dest}:`, err);
        process.exitCode = 1;
    }
}

if (require.main === module) main();

export default main;
