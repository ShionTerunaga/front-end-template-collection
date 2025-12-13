"use server";

import { appConfig } from "@/shared/config/config";
import { Result } from "@/utils/result";
import { RandomDogRes, randomDogScheme } from "../model/random-dog";
import { parseScheme } from "./parse-scheme";
import { hasParseFetcher } from "@/services/fetcher-get";
import { Option } from "@/utils/option";
import { FetcherError } from "@/utils/error/fetcher";

export async function getRandomDog(): Promise<
    Result<Option<RandomDogRes>, FetcherError>
> {
    return await hasParseFetcher({
        url: appConfig.apiKey2,
        scheme: randomDogScheme,
        parse: parseScheme,
        cache: "no-store"
    });
}
