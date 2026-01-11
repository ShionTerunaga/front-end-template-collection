import { promises as fs } from "fs";
import path from "path";

async function copyDir(src: string, dest: string, rel = ""): Promise<void> {
    await fs.mkdir(dest, { recursive: true });
    const entries = await fs.readdir(src, { withFileTypes: true });

    for (const ent of entries) {
        const name = ent.name;
        // Skip unwanted files/dirs anywhere under the copied tree
        if (
            name === "node_modules" ||
            name === ".next" ||
            name === "pnpm-lock.yaml" ||
            name === "dist" ||
            name === "coverage" ||
            name === ".tanstack" ||
            name === ".output" ||
            name === ".nuxt" ||
            name === ".react-router"
        ) {
            continue;
        }

        const srcPath = path.join(src, name);

        let destName = name;
        const isTop = rel === "";

        if (isTop) {
            if (name === "package.json") destName = "package-template.json";
            else if (name === "README.md") destName = "README.sample.md";
            else if (name === ".env") destName = "env";
            else if (name === ".gitignore") destName = "gitignore";
        }

        const destPath = path.join(dest, destName);

        if (ent.isDirectory()) {
            await copyDir(srcPath, destPath, path.posix.join(rel, name));
        } else if (ent.isFile()) {
            await fs.copyFile(srcPath, destPath);

            const stat = await fs.stat(srcPath);

            await fs.chmod(destPath, stat.mode);
        } else if (ent.isSymbolicLink()) {
            const target = await fs.readlink(srcPath);
            try {
                await fs.symlink(target, destPath);
            } catch {
                console.error("❌failed to create symlink\n");
            }
        }
    }
}

export async function run(srcAppDir: string, destBase: string): Promise<void> {
    try {
        const srcStat = await fs.stat(srcAppDir).catch(() => null);
        if (!srcStat || !srcStat.isDirectory()) {
            console.error(`❌source directory not found: ${srcAppDir}\n`);
            process.exit(1);
        }

        await fs.rm(destBase, { recursive: true, force: true }).catch(() => {});
        await copyDir(srcAppDir, destBase, "");

        console.log("✅copy finished:", srcAppDir, "->", destBase, "\n");
    } catch (err) {
        console.error("❌copy failed:", err + "\n");
        process.exit(1);
    }
}
