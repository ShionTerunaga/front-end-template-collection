import { optionUtility } from "./option";
import type { Option } from "./option";

export function envParse(env: string | undefined): Option<string> {
    const { optionConversion } = optionUtility;

    return optionConversion(env);
}
