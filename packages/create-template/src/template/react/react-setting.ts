import path from "path";
import { commanderCore } from "../../command/common/command-core";
import { cssReactCommand } from "../../command/react/react-css";
import { frameworkCommand } from "../../command/react/react-framework";
import { libCli } from "../../command/react/react-lib";
import { Result, resultUtility } from "../../utils/result";
import { TechMaterial } from "../core/core-static";
import { foundFolder } from "../../utils/found-file";
import { optionUtility } from "../../utils/option";
import { librarySetting } from "./react-static";

export async function reactCli(): Promise<Result<TechMaterial, Error>> {
    const { optionReactFramework, optionCss, optionUseAllComponents } =
        commanderCore;
    const { isNG, createOk } = resultUtility;
    const { createSome, isNone, createNone } = optionUtility;

    const frameworResult = await frameworkCommand(optionReactFramework);

    if (isNG(frameworResult)) {
        return frameworResult;
    }

    const cssResult = await cssReactCommand(optionCss);

    if (isNG(cssResult)) {
        return cssResult;
    }

    const resultSelected = await libCli(optionUseAllComponents);

    if (isNG(resultSelected)) {
        return resultSelected;
    }

    const templatePath = [
        path.join(
            __dirname,
            "template",
            "react",
            frameworResult.value,
            cssResult.value
        ),
        path.join(
            __dirname,
            "..",
            "..",
            "template",
            "react",
            frameworResult.value,
            cssResult.value
        )
    ];

    const resultPath = foundFolder(templatePath);

    if (isNG(resultPath)) {
        return resultPath;
    }

    const libs = resultSelected.value;

    const selectLib = isNone(libs)
        ? createNone()
        : createSome(
              librarySetting.filter((item) => libs.value.includes(item.lib))
          );

    const techMaterial: TechMaterial = {
        path: resultPath.value,
        styleSheet: createSome(cssResult.value),
        lib: selectLib
    };

    return createOk(techMaterial);
}
