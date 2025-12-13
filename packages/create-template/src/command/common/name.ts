import { resultUtility, type Result } from "../../utils/result";
import { optionUtility, type Option } from "../../utils/option";
import { isString } from "../../utils/is";
import prompts from "prompts";
import { validateNpmName } from "../../helper/validate-npm-name";
import { commanderCore } from "./core";

export async function nameCommand(
    optionName: Option<unknown>
): Promise<Result<string, Error>> {
    const { isSome, optionConversion } = optionUtility;
    const { onPromptState } = commanderCore;
    const { createOk, checkPromiseReturn, isNG } = resultUtility;

    if (isSome(optionName) && isString(optionName.value)) {
        return createOk(optionName.value.trim());
    }

    const response = await checkPromiseReturn({
        fn: async () =>
            await prompts({
                onState: onPromptState,
                type: "text",
                name: "path",
                message: "What is your project named?",
                initial: "my-project",
                validate: (name: string): boolean | string => {
                    const validation = validateNpmName(name);

                    if (validation.valid) {
                        return true;
                    }

                    return `Invalid project name: ${validation.problems?.join(", ")}`;
                }
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

    const name = optionConversion(response.value.path);

    if (isSome(name) && isString(name.value)) {
        return createOk(name.value.trim());
    }

    return createOk("my-project");
}
