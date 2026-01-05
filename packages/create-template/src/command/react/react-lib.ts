import {
    type Lib,
    libsArray,
    selectLibList
} from "../../template/react/react-static";
import { isBoolean } from "../../utils/is";
import { type Option, optionUtility } from "../../utils/option";
import { type Result, resultUtility } from "../../utils/result";
import { commanderCore } from "../common/command-core";
import prompts from "prompts";
import { isLib, isLibsArray } from "./react-is";

export async function libCli(
    optionLibs: Option<unknown>
): Promise<Result<Option<Array<Lib>>, Error>> {
    const { optionConversion, createSome, createNone } = optionUtility;
    const { createOk, checkPromiseReturn, createNg } = resultUtility;
    const { onPromptState } = commanderCore;

    if (optionLibs.isSome && isBoolean(optionLibs.value) && optionLibs.value) {
        return createOk(createSome([...libsArray]));
    }

    const response = await checkPromiseReturn({
        fn: async () =>
            await prompts({
                onState: onPromptState,
                type: "multiselect",
                name: "packages",
                message: "Select packages to add",
                choices: selectLibList,
                hint: "(Use space to select, and enter to submit)",
                instructions: false
            }),
        err: (e) => {
            if (e instanceof Error) {
                return new Error("Failed to select packages: " + e.message);
            }

            return new Error("Failed to select packages");
        }
    });

    if (response.isErr) {
        return response;
    }

    const selectedLibs = optionConversion(response.value.packages);

    if (selectedLibs.isNone) {
        return createOk(createNone());
    }

    const value = selectedLibs.value;

    const resultSelected = isLibsArray(value)
        ? createOk(createSome(value))
        : isLib(value)
          ? createOk(createSome([value]))
          : createNg(new Error("Selected packages have an invalid structure."));

    return resultSelected;
}
