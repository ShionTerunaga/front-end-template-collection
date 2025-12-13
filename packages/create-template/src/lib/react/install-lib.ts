import { resultUtility } from "../../utils/result";
import { mkdirSync } from "node:fs";
import path from "node:path";
import { Css, Lib, librarySetting } from "../../template/react.static";
import { copy } from "../../helper/copy";
import { foundFolder } from "../../utils/found-file";
import fs from "fs/promises";

export async function addPackage({
    root,
    css,
    libs
}: {
    root: string;
    css: Css;
    libs: Array<Lib>;
}) {
    const { isNG, checkPromiseReturn, checkPromiseVoid } = resultUtility;

    const appPath = path.join(root, "src", "lib");
    const testPath = path.join(root, "src", "__test__", "lib");
    const storybookPath = path.join(root, "src", "stories", "lib");

    const copySource = ["**/*"];

    mkdirSync(appPath, { recursive: true });

    mkdirSync(testPath, { recursive: true });

    mkdirSync(storybookPath, { recursive: true });

    const addLibs = librarySetting.filter((setting) =>
        libs.some((lib) => lib === setting.lib)
    );

    for (const lib of addLibs) {
        const srcLibDir = path.join(appPath, lib.lib);

        mkdirSync(srcLibDir, { recursive: true });

        const templatePath = [
            path.join(__dirname, "lib", "lib", lib.lib),
            path.join(__dirname, "..", "..", "..", "lib", "lib", lib.lib)
        ];

        const resultPath = foundFolder(templatePath);

        if (isNG(resultPath)) {
            console.error("Library folder not found:", resultPath.err.message);

            process.exit(1);
        }

        //copy packages
        const res = await copy(copySource, srcLibDir, {
            parents: true,
            cwd: resultPath.value
        });

        if (isNG(res)) {
            console.error(res.err);

            process.exit(1);
        }

        if (lib.storybook) {
            const srcStorybookDir = path.join(storybookPath, lib.lib);

            mkdirSync(srcStorybookDir, { recursive: true });

            const storybookTemplatePath = [
                path.join(__dirname, "lib", "stories", lib.lib + "-" + css),
                path.join(
                    __dirname,
                    "..",
                    "..",
                    "lib",
                    "stories",
                    lib.lib + "-" + css
                )
            ];

            const storybookResultPath = foundFolder(storybookTemplatePath);

            if (isNG(storybookResultPath)) {
                console.error(
                    "Storybook folder not found:",
                    storybookResultPath.err.message
                );

                process.exit(1);
            }

            const storyRes = await copy(copySource, srcStorybookDir, {
                parents: true,
                cwd: storybookResultPath.value
            });

            if (isNG(storyRes)) {
                console.error(storyRes.err.message);

                process.exit(1);
            }
        }

        if (lib.unitTest) {
            const srcTestDir = path.join(testPath, lib.lib);
            mkdirSync(srcTestDir, { recursive: true });

            const testTemplatePath = [
                path.join(__dirname, "lib", "__test__", lib.lib),
                path.join(__dirname, "..", "..", "lib", "__test__", lib.lib)
            ];

            const testResultPath = foundFolder(testTemplatePath);

            if (isNG(testResultPath)) {
                console.error(
                    "Unit test folder not found:",
                    testResultPath.err.message
                );

                process.exit(1);
            }

            const testRes = await copy(copySource, srcTestDir, {
                parents: true,
                cwd: testResultPath.value
            });

            if (isNG(testRes)) {
                console.error(testRes.err.message);

                process.exit(1);
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
        console.error(raw.err.message);
        console.error(raw.err.stack ?? "");

        process.exit(1);
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
        console.error(writeResult.err.message);
        console.error(writeResult.err.stack ?? "");

        process.exit(1);
    }

    console.log("✅ Added selected packages:", libs.join(", "));
}
