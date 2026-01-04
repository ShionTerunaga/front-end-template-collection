import { TechStack, techStacks } from "../../template/core-static";
import {
    Framework,
    frameworks,
    Lib,
    libsArray,
    ReactCss,
    reactCSSes
} from "../../template/react-static";
import { isArray } from "../../utils/is";

export function isReactFramework(value: unknown): value is Framework {
    if (typeof value !== "string") {
        return false;
    }

    return frameworks.includes(value as Framework);
}

export function isLibsArray(value: unknown): value is Array<Lib> {
    return (
        isArray(value) && value.every((item) => libsArray.includes(item as Lib))
    );
}

export function isLib(value: unknown): value is Lib {
    return libsArray.includes(value as Lib);
}

export function isTechStack(value: unknown): value is TechStack {
    if (typeof value !== "string") {
        return false;
    }

    return techStacks.includes(value as TechStack);
}

export function isReactCss(value: unknown): value is ReactCss {
    return reactCSSes.includes(value as ReactCss);
}
