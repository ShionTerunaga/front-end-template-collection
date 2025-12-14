import { execSync } from "node:child_process";
import { tmpdir, homedir } from "node:os";
import {
    mkdirSync,
    rmSync,
    readdirSync,
    renameSync,
    existsSync,
    statSync
} from "node:fs";
import { join, basename } from "node:path";
import AdmZip from "adm-zip";

// === 設定 ===
const DIR = "frontend-tools";
const OWNER = "ShionTerunaga";
const REPO = "front-end-template-collection";
const BRANCH = "release";

export async function main(TARGET_DIR_IN_ZIP: string) {
    const tmpBase = join(tmpdir(), `upgrade-tmp-${Date.now()}`);
    const zipPath = join(tmpBase, `${REPO}.zip`);
    const extractDir = join(tmpBase, "extract");
    const toolsDir = join(homedir(), DIR);

    mkdirSync(tmpBase, { recursive: true });
    mkdirSync(extractDir, { recursive: true });

    console.log("📦 Downloading ZIP...");
    const zipUrl = `https://github.com/${OWNER}/${REPO}/archive/refs/heads/${BRANCH}.zip`;
    execSync(`curl -L "${zipUrl}" -o "${zipPath}"`, { stdio: "inherit" });

    console.log("🧩 Extracting...");
    const zip = new AdmZip(zipPath);
    zip.extractAllTo(extractDir, true);

    // 展開後フォルダ（例: create-react-template-release）
    const [rootFolder] = readdirSync(extractDir);
    const extractedRoot = join(extractDir, rootFolder);
    const sourceDir = join(extractedRoot, TARGET_DIR_IN_ZIP);

    if (!existsSync(sourceDir)) {
        throw new Error(`❌ target directory not found in zip: ${sourceDir}`);
    }

    for (const item of readdirSync(toolsDir)) {
        if (item === basename(__filename)) continue; // 自分自身は消さない
        if (item === ".git") continue;
        const p = join(toolsDir, item);
        rmSync(p, { recursive: true, force: true });
        console.log("removed:", p);
    }

    console.log("📁 Copying files from:", sourceDir);
    copyRecursive(sourceDir, toolsDir);

    console.log("🧹 Cleaning temp files...");
    rmSync(tmpBase, { recursive: true, force: true });

    // Try to make the new tools directory available as a global CLI via npm link
    try {
        console.log("🔗 Running `npm install -g .` in", toolsDir);
        execSync("npm install -g .", { stdio: "inherit", cwd: toolsDir });
        console.log("✅ npm install completed");
    } catch (e) {
        console.error(
            "⚠️ npm install failed:",
            e instanceof Error ? e.message : e
        );
        console.error("You can run `npm install -g .` manually in", toolsDir);
    }

    console.log("✅ Upgrade complete!");
}

function copyRecursive(src: string, dest: string) {
    for (const item of readdirSync(src)) {
        const s = join(src, item);
        const d = join(dest, item);
        const st = statSync(s);
        if (st.isDirectory()) {
            mkdirSync(d, { recursive: true });
            copyRecursive(s, d);
        } else {
            renameSync(s, d);
            console.log(`copied: ${d}`);
        }
    }
}

const MAC = "execution/mac";

main(MAC).catch((e) => {
    console.error("❌ Upgrade failed:", e);
    process.exit(1);
});
