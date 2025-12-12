import z from "zod";
import { Option } from "@/utils/option";
import { Result } from "@/utils/result";
import { fetcher } from "./fetcher";
import { FetcherError } from "@/utils/error/fetcher";

export async function hasNoParseFetcher<T extends z.ZodType>({
    url,
    scheme,
    cache
}: {
    url: Option<string>;
    scheme: T;
    cache?: RequestCache;
}): Promise<Result<Option<z.infer<T>>, FetcherError>> {
    return await fetcher<T>({
        url,
        scheme,
        cache
    });
}
