import { core, ZodType } from "zod";
import { type Option, optionUtility } from "@/utils/option";
import { resultUtility, type Result } from "@/utils/result";
import { fetcher } from "./fetcher";
import { type FetcherError } from "@/utils/error/fetcher/fetcher-error";

export async function hasParseFetcher<T extends ZodType, S>({
    url,
    scheme,
    cache,
    parse
}: {
    url: Option<string>;
    scheme: T;
    cache?: RequestCache;
    parse: (scheme: core.output<T>) => Result<Option<S>, FetcherError>;
}): Promise<Result<Option<S>, FetcherError>> {
    const { createOk } = resultUtility;
    const { createNone } = optionUtility;

    const fetcherResult = await fetcher<T>({
        url,
        scheme,
        cache
    });

    if (fetcherResult.isErr) {
        return fetcherResult;
    }

    if (fetcherResult.value.isNone) {
        return createOk(createNone());
    }

    return parse(fetcherResult.value.value);
}
