import { appConfig } from "@/shared/config/config";
import { APIScheme } from "../model/model-res";
import { parseApi } from "./parse-api";
import { APIView } from "../model/model-view";
import { HttpError } from "@/utils/error/http/http";
import { hasParseFetcher } from "@/service/fetcher-get";
import { Result } from "@/utils/result";

export async function getCharacter(
    cache?: RequestCache
): Promise<Result<Array<APIView>, HttpError>> {
    return await hasParseFetcher({
        url: appConfig.apiKey,
        scheme: APIScheme,
        cache,
        parse: parseApi
    });
}
