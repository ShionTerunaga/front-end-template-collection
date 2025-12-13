import { isReactFramework } from "../../utils/is";
import { optionUtility, type Option } from "../../utils/option";
import { resultUtility } from "../../utils/result";
import prompts from "prompts";
import { commanderCore } from "../common/core";
import { blue } from "picocolors";

export async function frameworkCommand(optionFramework: Option<unknown>) {
    const { isSome } = optionUtility;
    const { createNg, createOk, checkPromiseReturn, isNG } = resultUtility;
    const { onPromptState } = commanderCore;

    if (isSome(optionFramework) && isReactFramework(optionFramework.value)) {
        return createOk(optionFramework.value);
    }

    const styleFramework = blue("framework");

    const response = await checkPromiseReturn({
        fn: async () =>
            await prompts({
                onState: onPromptState,
                type: "select",
                name: "framework",
                message: `Select a ${styleFramework} for your project:`,
                choices: [
                    { title: "TanStack Router", value: "tanstack-router" },
                    { title: "Next.js (App Router)", value: "next/app" },
                    { title: "Next.js (Pages Router)", value: "next/pages" }
                ],
                initial: 0
            }),
        err: (e) => {
            if (e instanceof Error) {
                return new Error(`Prompt failed: ${e.message}`);
            }
            return new Error("Prompt failed: Unknown error");
        }
    });

    if (isNG(response)) {
        return response;
    }

    const framework = response.value.framework;

    if (isReactFramework(framework)) {
        return createOk(framework);
    }

    return createNg(new Error("Framework selection is invalid"));
}
