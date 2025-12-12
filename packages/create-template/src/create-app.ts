import { resolve, basename } from "node:path";
import { Css, Framework, Lib } from "./template/template.static";
import { mkdirSync } from "node:fs";
import { isFolderEmpty } from "./helper/is-folder-empty";
import { green } from "picocolors";
import { installTemplate } from "./template/template.index";
import { addPackage } from "./install-lib/install-lib";
import { Option, optionUtility } from "./utils/option";
import { isLib, isLibsArray } from "./utils/is";
import { resultUtility } from "./utils/result";

export async function createApp({
    appPath,
    framework,
    css,
    libs
}: {
    appPath: string;
    framework: Framework;
    css: Css;
    libs: Option<Array<Lib>>;
}) {
    const { isNone } = optionUtility;
    const { createOk, createNg, isNG } = resultUtility;
    const root = resolve(appPath);
    const appName = basename(appPath);

    mkdirSync(root, { recursive: true });

    if (!isFolderEmpty(root, appName)) {
        process.exit(1);
    }

    console.log(`Creating a new React app in ${green(root)}.`);
    console.log();

    process.chdir(root);

    await installTemplate({
        appName,
        root,
        framework,
        css
    });

    if (isNone(libs)) {
        console.log("No packages selected. Exiting.");

        return;
    }

    const selectedPackages = libs.value;

    await addPackage({ root, css, libs: selectedPackages });
}
