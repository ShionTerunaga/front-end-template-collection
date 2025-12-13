import fs from "fs";
import path from "path";

/**
 * Recursively copy srcDir -> destDir
 */
function copyDir(src: string, dest: string) {
    if (!fs.existsSync(src)) throw new Error(`Source not found: ${src}`);
    fs.mkdirSync(dest, { recursive: true });

    const entries = fs.readdirSync(src, { withFileTypes: true });
    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else if (entry.isSymbolicLink()) {
            // replicate symlink target
            try {
                const real = fs.readlinkSync(srcPath);
                try {
                    fs.unlinkSync(destPath);
                } catch {}
                fs.symlinkSync(real, destPath);
            } catch (err) {
                // fallback to copy
                fs.copyFileSync(srcPath, destPath);
            }
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

async function main() {
    const repoRoot = path.resolve(__dirname, "..", "..", "..");
    const src = path.join(repoRoot, "packages", "common", "ts");

    const targets = [
        path.join(
            repoRoot,
            "packages",
            "main-template",
            "react",
            "next",
            "app",
            "tailwind",
            "src"
        ),
        path.join(
            repoRoot,
            "packages",
            "main-template",
            "react",
            "next",
            "app",
            "vanilla-extract",
            "src"
        ),
        path.join(
            repoRoot,
            "packages",
            "main-template",
            "react",
            "next",
            "pages",
            "tailwind",
            "src"
        ),
        path.join(
            repoRoot,
            "packages",
            "main-template",
            "react",
            "next",
            "pages",
            "vanilla-extract",
            "src"
        ),
        path.join(
            repoRoot,
            "packages",
            "main-template",
            "react",
            "tanstack-router",
            "vanilla-extract",
            "src"
        ),
        path.join(
            repoRoot,
            "packages",
            "main-template",
            "react",
            "tanstack-router",
            "tailwind",
            "src"
        )
    ];

    if (!fs.existsSync(src)) {
        console.error(`Source directory does not exist: ${src}`);
        process.exitCode = 2;
        return;
    }

    for (const t of targets) {
        try {
            console.log(`\n--- copying utils -> ${t}`);

            const destUtils = path.join(t, "utils");

            if (fs.existsSync(destUtils)) {
                console.log(`Removing existing: ${destUtils}`);

                fs.rmSync(destUtils, { recursive: true, force: true });
            } else {
                fs.mkdirSync(t, { recursive: true });
            }

            const utilsPath = path.join(src, "src", "utils");

            copyDir(utilsPath, destUtils);

            console.log(`Copied to ${destUtils}`);

            // Copy
            const testSrc = path.join(src, "src", "__test__");
            const testDest = path.join(t, "__test__", "utils");

            if (fs.existsSync(testDest)) {
                console.log(`Removing existing: ${testDest}`);
                fs.rmSync(testDest, { recursive: true, force: true });
            } else {
                fs.mkdirSync(testDest, { recursive: true });
            }

            copyDir(testSrc, testDest);
        } catch (err) {
            console.error(`Failed to copy to ${t}:`, err);
        }
    }

    console.log("\nAll done.");
}

if (require.main === module) main();

export default main;
