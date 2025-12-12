import fs from "fs";
import path from "path";
import { Target } from "./create-env.type";
import { examplesNext } from "./next-example-env";
import { mainNextEnv } from "./next-main-env";
import { tanstackRouterEnv } from "./tanstack-main";

const targets: Array<Target> = [
    ...examplesNext,
    ...mainNextEnv,
    ...tanstackRouterEnv
];

function ensureDirExists(dir: string) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

for (const t of targets) {
    try {
        ensureDirExists(t.dir);
        const filePath = path.join(t.dir, ".env");
        fs.writeFileSync(filePath, t.content, { encoding: "utf8" });
        // Log relative path for user clarity
        console.log(`Wrote ${path.relative(process.cwd(), filePath)}`);
    } catch (err) {
        console.error(`Failed to write .env in ${t.dir}:`, err);
        process.exitCode = 2;
    }
}

// exit normally
process.exitCode = 0;
