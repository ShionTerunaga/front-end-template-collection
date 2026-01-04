import { type Option, optionUtility } from "../../utils/option";
import { resultUtility } from "../../utils/result";
import prompts, { Choice, Falsy, PrevCaller } from "prompts";
import { commanderCore } from "../common/command-core";

export async function cssCommand<T>({
    optionCss,
    isCss,
    csses
}: {
    optionCss: Option<unknown>;
    isCss: (value: unknown) => value is NonNullable<T>;
    csses: Choice[] | PrevCaller<string, Falsy | Choice[]>;
}) {
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
                choices: csses,
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
