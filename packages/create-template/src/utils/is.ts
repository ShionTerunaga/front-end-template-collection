import { TechStack, techStacks } from "../template/core.static";
import {
    ReactCss,
    csses,
    Framework,
    frameworks,
    Lib,
    libsArray
} from "../template/react.static";

export function isReactFramework(value: unknown): value is Framework {
    if (typeof value !== "string") {
        return false;
    }

    return frameworks.includes(value as Framework);
}

export function isNull(value: unknown): value is null {
    return value === null;
}

export function isUndefined(value: unknown): value is undefined {
    return value === undefined;
}

export function isString(value: unknown): value is string {
    return typeof value === "string";
}

function isArray(value: unknown): value is Array<unknown> {
    return Array.isArray(value);
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

export function isCss(value: unknown): value is ReactCss {
    return csses.includes(value as ReactCss);
}

export function isBoolean(value: unknown): value is boolean {
    return typeof value === "boolean";
}
