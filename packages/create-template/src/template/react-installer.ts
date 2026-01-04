import path, { resolve, basename } from "node:path";
import { mkdirSync } from "node:fs";
import { isFolderEmpty } from "../helper/is-folder-empty";
import { green } from "picocolors";
import { addPackage } from "../lib/react/install-lib";
import { optionUtility } from "../utils/option";
import { Noop, Result, resultUtility } from "../utils/result";
import { TechMaterial } from "./core-static";
import { copy } from "../helper/copy";
import fs from "fs/promises";

export async function reactInstaller({
    appPath,
    material
}: {
    appPath: string;
    material: TechMaterial;
}): Promise<Result<Noop, Error>> {
    const { isNG, createNg, checkPromiseVoid } = resultUtility;
    const { isNone } = optionUtility;
    const { path: templatePath, styleSheet, lib } = material;

    const copySource = ["**/*"];

    const root = resolve(appPath);
    const appName = basename(appPath);

    if (isNone(styleSheet)) {
        return createNg(new Error("CSS option is required"));
    }

    if (isNone(lib)) {
        return createNg(new Error("Library option is required"));
    }

    mkdirSync(root, { recursive: true });

    if (!isFolderEmpty(root, appName)) {
        return createNg(
            new Error(
                `The directory ${appName} is not empty. Please choose a different project name or remove the existing directory.\n`
            )
        );
    }

    console.log(`Creating a new React app in ${green(root)}.`);
    console.log();

    process.chdir(root);

    const res = await copy(copySource, root, {
        parents: true,
        cwd: templatePath,
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
        return res;
    }

    const pkgPath = path.join(root, "package.json");

    const exists = await checkPromiseVoid({
        fn: async () => {
            await fs.stat(pkgPath);
        },
        err: (e) => {
            if (e instanceof Error) {
                return new Error(`Failed to access package.json: ${e.message}`);
            }
            return new Error("Failed to access package.json: Unknown error");
        }
    });

    if (isNG(exists)) {
        return exists;
    }

    const raw = await fs.readFile(pkgPath, "utf8");
    const pkg = JSON.parse(raw || "{}");

    if (!appName || typeof appName !== "string") {
        return createNg(new Error("Invalid app name"));
    }

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
        return writeResult;
    }

    return await addPackage({ root, css: styleSheet.value, libs: lib.value });
}
