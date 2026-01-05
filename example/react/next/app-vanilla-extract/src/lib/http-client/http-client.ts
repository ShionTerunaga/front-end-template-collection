import { fetcher } from "./fetcher-core";
import { resultUtility, type Result } from "@/utils/result";
import type { core, ZodError, ZodType } from "zod";
import type { Dict } from "@/shared/types/object";

export interface HttpError {
    status: number;
    message: string;
    maxRetry: number;
}

export interface RetryValue<T> {
    httpStatus: number;
    error: NonNullable<T>;
}

interface Retry<T> {
    maxRetry: number;
    errors: Array<RetryValue<T>>;
}

export interface OnceError<T> {
    httpStatus: number;
    error: NonNullable<T>;
}

export function httpClient<E>({
    baseUrl,
    baseHeaders = {},
    urlSettingErrorHandler,
    retryErrors = { maxRetry: 0, errors: [] },
    fetchErrorHandler,
    onceErrors = [],
    unknownError
}: {
    baseUrl: string;
    baseHeaders?: Record<string, string>;
    retryErrors?: Retry<NonNullable<E>>;
    urlSettingErrorHandler: NonNullable<E>;
    fetchErrorHandler: (error: unknown) => NonNullable<E>;
    onceErrors?: Array<OnceError<NonNullable<E>>>;
    unknownError: NonNullable<E>;
}) {
    const { createNg, createOk } = resultUtility;

    const joinUrl = (
        baseUrl: string,
        endpoint: string
    ): Result<string, NonNullable<E>> => {
        const b = baseUrl.replace(/\/+$/, "");
        const e = endpoint.replace(/^\/+/, "");

        const url = `${b}/${e}`;

        if (url.trim() === "") {
            return createNg(urlSettingErrorHandler);
        }

        return createOk(url);
    };

    const get = async <T extends ZodType>({
        endpoint,
        scheme,
        cache,
        requestHeaders = {},
        schemaErrorHandler
    }: {
        endpoint: string;
        scheme: T;
        cache?: RequestCache;
        requestHeaders?: Dict<string>;
        schemaErrorHandler: (
            error: ZodError<core.output<T>>
        ) => Result<never, NonNullable<E>>;
    }) => {
        const headers = { ...baseHeaders, ...requestHeaders };

        const urlResult = joinUrl(baseUrl, endpoint);

        if (urlResult.isErr) {
            return urlResult;
        }

        const url = urlResult.value;

        return await fetcher<T, NonNullable<E>>({
            url,
            scheme,
            cache,
            headers,
            fetchErrorHandler,
            schemaErrorHandler,
            maxRetry: retryErrors.maxRetry,
            retryErrors: retryErrors.errors,
            onceErrors: onceErrors,
            unknownError: unknownError
        });
    };

    return { get };
}
