import z from "zod";
import { Option } from "ts-shared";
import { Result } from "ts-shared";
import { fetcher } from "./fetcher";
import { FetcherError } from "@/shared/error/fetcher";

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
