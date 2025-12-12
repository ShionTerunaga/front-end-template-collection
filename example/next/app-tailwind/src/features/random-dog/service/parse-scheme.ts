import { resultUtility, Result } from "@/utils/result";
import { RandomDogRes } from "../model/random-dog";
import fetcherError from "@/utils/error/fetcher";
import { Option, optionUtility } from "@/utils/option";
import { FetcherError } from "@/utils/error/fetcher";

export function parseScheme(
    scheme: RandomDogRes
): Result<Option<RandomDogRes>, FetcherError> {
    const { createFetcherError } = fetcherError;
    const { createOk, createNg } = resultUtility;
    const { createSome } = optionUtility;

    if (scheme.status !== "success") {
        return createNg(createFetcherError.returnParseError);
    }

    return createOk(createSome(scheme));
}
