import { blue } from "picocolors";
import { Option } from "../../utils/option";
import { Result, resultUtility } from "../../utils/result";
import { commanderCore } from "../common/command-core";
import { isVueFramework } from "../../template/vue/vue-is";
import { VueFramework } from "../../template/vue/vue-static";
import prompts from "prompts";

export async function vueFrameworkCommand(
    optionVueFramework: Option<unknown>
): Promise<Result<VueFramework, Error>> {
    const { onPromptState } = commanderCore;
    const { createOk, checkPromiseReturn, createNg } = resultUtility;

    if (optionVueFramework.isSome && isVueFramework(optionVueFramework.value)) {
        return createOk(optionVueFramework.value);
    }

    const styleFramework = blue("framework");

    const response = await checkPromiseReturn({
        fn: async () =>
            await prompts({
                onState: onPromptState,
                type: "select",
                name: "framework",
                message: `Select a framework for your project:`,
                choices: [
                    { title: "Vue router", value: "vue-router" },
                    { title: "Nuxt.js", value: "nuxt" }
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

    if (response.isErr) {
        return response;
    }

    const framework = response.value.framework;

    if (isVueFramework(framework)) {
        return createOk(framework);
    }

    return createNg(new Error("Framework selection is invalid"));
}
