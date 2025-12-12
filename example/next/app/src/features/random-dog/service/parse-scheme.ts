import { resultUtility, Result } from "@/utils/result";
import { RandomDogRes } from "../model/random-dog";
import { createHttpError, HttpError } from "@/utils/error/http/http";

export function parseScheme(
    scheme: RandomDogRes
): Result<RandomDogRes, HttpError> {
    const createError = createHttpError;
    const { createOk, createNg } = resultUtility;

    if (scheme.status !== "success") {
        return createNg(createError.parseError());
    }

    return createOk(scheme);
}
