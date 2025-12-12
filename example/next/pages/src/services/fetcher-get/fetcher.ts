import { core, ZodType } from "zod";
import { Option, optionUtility } from "../../utils/option";
import { Result, resultUtility } from "../../utils/result";
import httpError, { HttpError } from "../../utils/error/http";

export async function fetcher<T extends ZodType>({
    url,
    scheme,
    cache
}: {
    url: Option<string>;
    scheme: T;
    cache?: RequestCache;
}): Promise<Result<core.output<T>, HttpError>> {
    const httpErrorScheme = httpError.createHttpScheme;
    const createError = httpError.createHttpError;

    const { isNone } = optionUtility;
    const { createNg, createOk } = resultUtility;

    if (isNone(url)) {
        return createNg(createError.notFoundAPIUrl());
    }

    const res = await fetch(url.value, {
        cache
    });

    if (!res.ok) {
        const status = res.status;

        switch (status) {
            case httpErrorScheme.httpErrorStatusResponse.notFound:
                return createNg(createError.returnNotFoundAPIUrl());
            case httpErrorScheme.httpErrorStatusResponse.forbidden:
                return createNg(createError.returnNoPermission());
            case httpErrorScheme.httpErrorStatusResponse.badRequest:
                return createNg(createError.returnBadRequest());
            case httpErrorScheme.httpErrorStatusResponse.internalServerError:
                return createNg(createError.returnInternalServerError());
            default:
                return createNg(createError.unknownError());
        }
    }

    const resValue = await res.json();

    const judgeType = scheme.safeParse(resValue);

    if (judgeType.error !== undefined) {
        return createNg(createError.schemeError());
    }

    const okValue = judgeType.data;

    if (okValue === undefined || okValue === null) {
        return createNg(createError.responseError());
    }

    return createOk(okValue);
}
