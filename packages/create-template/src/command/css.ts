import { isCss } from "../utils/is";
import { type Option, optionUtility } from "../utils/option";
import { resultUtility } from "../utils/result";
import prompts from "prompts";
import { commanderCore } from "./core";

export async function cssCommand(optionCss: Option<unknown>) {
    const { isSome, optionConversion } = optionUtility;
    const { createOk, createNg, checkPromiseReturn, isNG } = resultUtility;
    const { onPromptState } = commanderCore;

    if (isSome(optionCss) && isCss(optionCss.value)) {
        return createOk(optionCss.value);
    }

    const response = await checkPromiseReturn({
        fn: async () =>
            await prompts({
                onState: onPromptState,
                type: "select",
                name: "css",
                message: "Select a CSS framework for your project:",
                choices: [
                    { title: "tailwindCSS", value: "tailwind" },
                    { title: "vanilla-extract ", value: "vanilla-extract" }
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

    const css = optionConversion(response.value.css);

    if (isSome(css) && isCss(css.value)) {
        return createOk(css.value);
    }

    return createNg(new Error("CSS selection is invalid"));
}
