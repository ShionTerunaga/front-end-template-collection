export function isNull(value: unknown): value is null {
    return value === null;
}

export function isUndefined(value: unknown): value is undefined {
    return value === undefined;
}

export function isString(value: unknown): value is string {
    return typeof value === "string";
}

export function isArray(value: unknown): value is Array<unknown> {
    return Array.isArray(value);
}

export function isBoolean(value: unknown): value is boolean {
    return typeof value === "boolean";
}
