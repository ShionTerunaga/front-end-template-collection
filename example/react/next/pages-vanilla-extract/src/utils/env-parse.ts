import { Option, optionUtility } from "./option";

export function envParse(env: string | undefined): Option<string> {
    const { createSome, createNone } = optionUtility;

    if (env === undefined || env === null) {
        return createNone();
    }

    return createSome<string>(env);
}
