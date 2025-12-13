import { copy } from "../helper/copy";
import type { InstallTemplateArgs } from "./react.static";
import path from "path";
import { resultUtility } from "../utils/result";
import fs from "fs/promises";
import { foundFolder } from "../utils/found-file";

export async function installTemplate({
    appName,
    root,
    framework,
    css
}: InstallTemplateArgs) {
    const { isNG, checkPromiseVoid } = resultUtility;

    const copySource = ["**/*"];

    const templatePath = [
        path.join(__dirname, "template", framework, css),
        path.join(__dirname, "..", "..", "template", framework, css)
    ];

    const resultPath = foundFolder(templatePath);

    if (isNG(resultPath)) {
        console.error("Template folder not found:", resultPath.err.message);

        process.exit(1);
    }

    const res = await copy(copySource, root, {
        parents: true,
        cwd: resultPath.value,
        rename: (name) => {
            switch (name) {
                case "gitignore":
                    return `.${name}`;
                case "env":
                    return `.${name}`;
                case "package-template.json":
                    return "package.json";
                case "README.sample.md":
                    return "README.md";
                default:
                    return name;
            }
        }
    });

    if (isNG(res)) {
        console.error(res.err.message);

        process.exit(1);
    }

    const pkgPath = path.join(root, "package.json");

    const exists = await fs
        .stat(pkgPath)
        .then(() => true)
        .catch(() => false);

    if (!exists) return;

    const raw = await fs.readFile(pkgPath, "utf8");
    const pkg = JSON.parse(raw || "{}");

    if (!appName || typeof appName !== "string") return;

    pkg.name = appName;

    const writeResult = await checkPromiseVoid({
        fn: async () => {
            await fs.writeFile(
                pkgPath,
                JSON.stringify(pkg, null, 2) + "\n",
                "utf8"
            );
        },
        err: () => new Error(`Failed to update package.json name`)
    });

    if (isNG(writeResult)) {
        console.error(
            "Failed to update package.json name:",
            writeResult.err.message
        );
        process.exit(1);
    }
}
