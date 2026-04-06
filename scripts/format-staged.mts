import { execFileSync } from "child_process";

const FORMAT_EXTENSIONS = new Set([
    ".js",
    ".jsx",
    ".ts",
    ".tsx",
    ".json",
    ".css",
    ".md",
    ".html"
]);

function shouldFormat(filePath: string): boolean {
    if (!filePath || filePath.startsWith("bin/")) {
        return false;
    }

    const extension = filePath.slice(filePath.lastIndexOf("."));

    return FORMAT_EXTENSIONS.has(extension);
}

function main(): void {
    const stagedFilesFromArgv = process.argv.slice(2).filter(Boolean);
    const raw = process.env.STAGED_FILES ?? "";
    const stagedFilesFromEnv: string[] = raw
        .split(/\r?\n/)
        .map((filePath) => filePath.trim())
        .filter(Boolean);

    const stagedFiles: string[] =
        stagedFilesFromArgv.length > 0
            ? stagedFilesFromArgv
            : stagedFilesFromEnv;

    const targets: string[] = stagedFiles.filter(shouldFormat);

    if (targets.length === 0) {
        return;
    }

    execFileSync("pnpm", ["exec", "oxfmt", "--write", ...targets], {
        stdio: "inherit"
    });
}

main();
