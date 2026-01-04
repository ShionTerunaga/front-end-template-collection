import { noop, Noop, Result, resultUtility } from "../../utils/result";
import { mkdirSync } from "node:fs";
import path from "node:path";
import { ReactCss, ReactLibrarySettings } from "../../template/react-static";
import { copy } from "../../helper/copy";
import { foundFolder } from "../../utils/found-file";
import fs from "fs/promises";
import { green } from "picocolors";

export async function addPackage({
    root,
    css,
    libs
}: {
    root: string;
    css: ReactCss;
    libs: ReactLibrarySettings;
}): Promise<Result<Noop, Error>> {
    const { isNG, createOk, checkPromiseReturn, checkPromiseVoid } =
        resultUtility;

    if (libs.length === 0) {
        console.log("✅ No additional packages selected.");

        return createOk(noop);
    }

    const appPath = path.join(root, "src", "lib");
    const testPath = path.join(root, "src", "__test__", "lib");
    const storybookPath = path.join(root, "src", "stories", "lib");

    const copySource = ["**/*"];

    mkdirSync(appPath, { recursive: true });

    mkdirSync(testPath, { recursive: true });

    mkdirSync(storybookPath, { recursive: true });

    for (const lib of libs) {
        const srcLibDir = path.join(appPath, lib.lib);

        mkdirSync(srcLibDir, { recursive: true });

        const templatePath = [
            path.join(__dirname, "lib", "react", "lib", lib.lib),
            path.join(
                __dirname,
                "..",
                "..",
                "..",
                "lib",
                "react",
                "lib",
                lib.lib
            )
        ];

        const resultPath = foundFolder(templatePath);

        if (isNG(resultPath)) {
            return resultPath;
        }

        //copy packages
        const res = await copy(copySource, srcLibDir, {
            parents: true,
            cwd: resultPath.value
        });

        if (isNG(res)) {
            return res;
        }

        if (lib.storybook) {
            const srcStorybookDir = path.join(storybookPath, lib.lib);

            mkdirSync(srcStorybookDir, { recursive: true });

            const storybookTemplatePath = [
                path.join(
                    __dirname,
                    "lib",
                    "react",
                    "stories",
                    lib.lib + "-" + css
                ),
                path.join(
                    __dirname,
                    "..",
                    "..",
                    "..",
                    "lib",
                    "react",
                    "stories",
                    lib.lib + "-" + css
                )
            ];

            const storybookResultPath = foundFolder(storybookTemplatePath);

            if (isNG(storybookResultPath)) {
                return storybookResultPath;
            }

            const storyRes = await copy(copySource, srcStorybookDir, {
                parents: true,
                cwd: storybookResultPath.value
            });

            if (isNG(storyRes)) {
                return storyRes;
            }
        }

        if (lib.unitTest) {
            const srcTestDir = path.join(testPath, lib.lib);
            mkdirSync(srcTestDir, { recursive: true });

            const testTemplatePath = [
                path.join(__dirname, "lib", "react", "__test__", lib.lib),
                path.join(
                    __dirname,
                    "..",
                    "..",
                    "..",
                    "lib",
                    "react",
                    "__test__",
                    lib.lib
                )
            ];

            const testResultPath = foundFolder(testTemplatePath);

            if (isNG(testResultPath)) {
                return testResultPath;
            }

            const testRes = await copy(copySource, srcTestDir, {
                parents: true,
                cwd: testResultPath.value
            });

            if (isNG(testRes)) {
                return testRes;
            }
        }
    }

    const pkgPath = path.join(root, "template.info.json");

    const pkgInfo = { libs };

    const raw = await checkPromiseReturn({
        fn: async () => await fs.readFile(pkgPath, "utf8"),
        err: () => new Error(`Failed to read template.info.json`)
    });

    if (isNG(raw)) {
        return raw;
    }

    const existingInfo = JSON.parse(raw.value || "{}");

    const updatedInfo = { ...existingInfo, ...pkgInfo };

    const writeResult = await checkPromiseVoid({
        fn: async () => {
            await fs.writeFile(
                pkgPath,
                JSON.stringify(updatedInfo, null, 2),
                "utf8"
            );
        },
        err: () => new Error(`Failed to update template.info.json`)
    });

    if (isNG(writeResult)) {
        return writeResult;
    }

    const libNames = libs.map((l) => l.lib).join(", ");

    console.log("✅ Added selected packages:", green(libNames));

    return createOk(noop);
}
