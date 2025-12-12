import { core, ZodType } from "zod";
import { Option, optionUtility } from "@/utils/option";
import { resultUtility, Result } from "@/utils/result";
import { fetcher } from "./fetcher";
import { FetcherError } from "@/utils/error/fetcher/fetcher-error";

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
    const { isNG, createOk } = resultUtility;
    const { isNone, createNone } = optionUtility;

    const fetcherResult = await fetcher<T>({
        url,
        scheme,
        cache
    });

    if (isNG(fetcherResult)) {
        return fetcherResult;
    }

    if (isNone(fetcherResult.value)) {
        return createOk(createNone());
    }

    return parse(fetcherResult.value.value);
}
