import { core, ZodType } from "zod";
import { Option, optionUtility } from "@/utils/option";
import { Result, resultUtility } from "@/utils/result";
import error from "@/utils/error/http";
import {
    createFetcherError,
    FetcherError
} from "@/utils/error/fetcher/fetcher-error";

export async function fetcher<T extends ZodType>({
    url,
    scheme,
    cache
}: {
    url: Option<string>;
    scheme: T;
    cache?: RequestCache;
}): Promise<Result<Option<core.output<T>>, FetcherError>> {
    const { notFound, forbidden, badRequest, internalServerError } =
        error.createHttpScheme.httpErrorStatusResponse;

    const {
        returnNotSetApiUrl,
        returnNotFoundAPIUrl,
        returnNoPermission,
        returnBadRequest,
        returnSchemeError,
        returnUnknownError,
        returnFetchFunctionError,
        returnInternalServerError
    } = createFetcherError;

    const { isNone, createNone, createSome } = optionUtility;
    const { isNG, createNg, createOk, checkPromiseReturn } = resultUtility;

    if (isNone(url)) {
        return createNg(returnNotSetApiUrl);
    }

    const res = await checkPromiseReturn({
        fn: () => fetch(url.value, { cache }),
        err: returnFetchFunctionError
    });

    if (isNG(res)) {
        return res;
    }

    if (!res.value.ok) {
        const status = res.value.status;

        switch (status) {
            case notFound:
                return createNg(returnNotFoundAPIUrl);
            case forbidden:
                return createNg(returnNoPermission);
            case badRequest:
                return createNg(returnBadRequest);
            case internalServerError:
                return createNg(returnInternalServerError);
            default:
                return createNg(returnUnknownError);
        }
    }

    const resValue = await res.value.json();

    const judgeType = scheme.safeParse(resValue);

    if (judgeType.error !== undefined) {
        return createNg(returnSchemeError);
    }

    const okValue = judgeType.data;

    if (okValue === undefined || okValue === null) {
        return createOk(createNone());
    }

    return createOk(createSome(okValue));
}
