import { basename, resolve } from "node:path";
import { validateNpmName } from "./helper/validate-npm-name";
import { existsSync } from "node:fs";
import { bold, red, green } from "picocolors";
import { createApp } from "./create-app";
import { resultUtility } from "./utils/result";
import { commanderCore } from "./command/common/core";
import { nameCommand } from "./command/common/name";
import { frameworkCommand } from "./command/react/framework";
import { cssCommand } from "./command/react/css";
import { libCli } from "./command/react/lib";
import { cliErrorLog } from "./utils/error";

const handleSigTerm = () => process.exit(0);

process.on("SIGTERM", handleSigTerm);
process.on("SIGINT", handleSigTerm);

export async function run(): Promise<string> {
    const { isNG } = resultUtility;

    const { optionName, optionFramework, optionCss, optionUseAllComponents } =
        commanderCore;

    const projectName = await nameCommand(optionName);

    if (isNG(projectName)) {
        cliErrorLog(projectName.err);
        process.exit(1);
    }

    const appPath = resolve(projectName.value);
    const appName = basename(appPath);

    const validation = validateNpmName(appName);

    if (!validation.valid) {
        console.error(
            `Could not create a project called ${appName} because of npm naming restrictions:\n\n- ${validation.problems?.join(
                "\n- "
            )}\n`
        );
        process.exit(1);
    }

    if (existsSync(appName)) {
        console.error(
            red(
                `The directory ${appName} already exists. Please choose a different project name or remove the existing directory.\n`
            )
        );
        process.exit(1);
    }

    const frameworResult = await frameworkCommand(optionFramework);

    if (isNG(frameworResult)) {
        cliErrorLog(frameworResult.err);
        process.exit(1);
    }

    const cssResult = await cssCommand(optionCss);

    if (isNG(cssResult)) {
        cliErrorLog(cssResult.err);
        process.exit(1);
    }

    const resultSelected = await libCli(optionUseAllComponents);

    if (isNG(resultSelected)) {
        cliErrorLog(resultSelected.err);
        process.exit(1);
    }

    await createApp({
        appPath,
        framework: frameworResult.value,
        css: cssResult.value,
        libs: resultSelected.value
    });

    return projectName.value;
}

export function notify(projectPath: string): void {
    console.log("cd " + projectPath);

    console.log(`Package install: \n\n ex) npm install`);

    console.log(`Application launch: \n\n ex) npm run dev`);

    console.log();

    console.log(bold(`${green("Happy hacking!")}`));

    process.exit(0);
}

export function errorExit() {
    console.error(red("The operation was cancelled."));

    process.exit(1);
}
