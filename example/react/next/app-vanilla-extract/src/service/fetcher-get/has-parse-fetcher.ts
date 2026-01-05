import { core, ZodType } from "zod";
import { Option } from "@/utils/option";
import { HttpError } from "@/utils/error/http";
import { resultUtility, Result } from "@/utils/result";
import { fetcher } from "./fetcher";

export async function hasParseFetcher<T extends ZodType, S>({
    url,
    scheme,
    cache,
    parse
}: {
    url: Option<string>;
    scheme: T;
    cache?: RequestCache;
    parse: (scheme: core.output<T>) => Result<S, HttpError>;
}): Promise<Result<S, HttpError>> {
    const { isNG } = resultUtility;

    const fetcherResult = await fetcher<T>({
        url,
        scheme,
        cache
    });

    if (isNG(fetcherResult)) {
        return fetcherResult;
    }

    return parse(fetcherResult.value);
}
