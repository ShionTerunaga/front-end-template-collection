"use server";

import { appConfig } from "@/shared/config/config";
import { HttpError } from "@/utils/error/http/http";
import { Result } from "@/utils/result";
import { RandomDogRes, randomDogScheme } from "../model/random-dog";
import { parseScheme } from "./parse-scheme";
import { hasParseFetcher } from "@/service/fetcher-get";

export async function getRandomDog(): Promise<Result<RandomDogRes, HttpError>> {
    return await hasParseFetcher({
        url: appConfig.apiKey2,
        scheme: randomDogScheme,
        parse: parseScheme,
        cache: "no-store"
    });
}
