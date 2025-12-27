import { core, ZodError, ZodType } from "zod";
import { type Option, optionUtility } from "@/utils/option";
import { type Result, resultUtility } from "@/utils/result";

import type { OnceError, RetryValue } from "./http-client";
import type { Dict } from "@/shared/types/object";
import { fetcherCollection } from "./fetcher-collection";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const method = ["GET", "POST"] as const;
type HttpMethod = (typeof method)[number];

export async function fetcher<T extends ZodType, E>({
    url,
    scheme,
    cache,
    headers,
    method = "GET",
    fetchErrorHandler,
    schemaErrorHandler,
    maxRetry,
    retryErrors,
    onceErrors,
    unknownError
}: {
    url: string;
    method?: HttpMethod;
    scheme: T;
    cache?: RequestCache;
    headers?: Dict<string>;
    maxRetry: number;
    retryErrors: Array<RetryValue<NonNullable<E>>>;
    onceErrors: Array<OnceError<NonNullable<E>>>;
    fetchErrorHandler: (error: unknown) => NonNullable<E>;
    schemaErrorHandler: (
        error: ZodError<core.output<T>>
    ) => Result<never, NonNullable<E>>;
    unknownError: NonNullable<E>;
}): Promise<Result<Option<core.output<T>>, NonNullable<E>>> {
    const { createNone, createSome, optionConversion } = optionUtility;
    const { createOk, createNg } = resultUtility;
    const { get, post } = fetcherCollection;

    const responseResult = await (async () => {
        switch (method) {
            case "GET":
                return await get<NonNullable<E>>({
                    url,
                    cache,
                    headers,
                    fetchErrorHandler
                });
            case "POST":
                return await post<NonNullable<E>>({
                    url,
                    headers,
                    body: createNone(),
                    fetchErrorHandler
                });
        }
    })();

    if (responseResult.isErr) {
        return responseResult;
    }

    if (!responseResult.value.ok) {
        const matched = optionConversion(
            onceErrors.find(
                ({ httpStatus }) => httpStatus === responseResult.value.status
            )
        );

        if (matched.isSome) {
            return createNg(matched.value.error);
        }

        const retryMatched = optionConversion(
            retryErrors.find(
                ({ httpStatus }) => httpStatus === responseResult.value.status
            )
        );

        if (maxRetry - 1 < 0 && retryMatched.isSome) {
            return createNg(retryMatched.value.error);
        }

        if (retryMatched.isSome) {
            return await fetcher({
                url,
                scheme,
                cache,
                headers,
                maxRetry: maxRetry - 1,
                fetchErrorHandler,
                schemaErrorHandler,
                retryErrors: retryErrors,
                onceErrors: onceErrors,
                unknownError
            });
        }

        return createNg(unknownError);
    }

    const resValue = await responseResult.value.json();

    const judgeType = scheme.safeParse(resValue);

    if (judgeType.error) {
        return schemaErrorHandler(judgeType.error);
    }

    const okValue = judgeType.data;

    if (okValue === undefined || okValue === null) {
        return createOk(createNone());
    }

    return createOk(createSome(okValue));
}
