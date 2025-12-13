import prompts from "prompts";
import { TechStack, techStackSelectList } from "../../template/core.static";
import { isTechStack } from "../../utils/is";
import { optionUtility, type Option } from "../../utils/option";
import { Result, resultUtility } from "../../utils/result";
import { commanderCore } from "./core";

export async function techStackCommand(
    optionTech: Option<unknown>
): Promise<Result<TechStack, Error>> {
    const { isSome } = optionUtility;
    const { createOk, createNg, checkPromiseReturn, isNG } = resultUtility;
    const { onPromptState } = commanderCore;

    if (isSome(optionTech) && isTechStack(optionTech.value)) {
        return createOk(optionTech.value);
    }

    const response = await checkPromiseReturn({
        fn: async () =>
            await prompts({
                onState: onPromptState,
                type: "select",
                name: "techStack",
                message: "Select a tech stack for your project:",
                choices: techStackSelectList,
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

    const techStack = response.value.techStack;

    if (isTechStack(techStack)) {
        return createOk(techStack);
    }

    return createNg(new Error("Tech stack selection is invalid"));
}
