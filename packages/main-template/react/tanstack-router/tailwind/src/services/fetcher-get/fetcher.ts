import { core, ZodType } from 'zod'
import { type Option, optionUtility } from '@/utils/option'
import { type Result, resultUtility } from '@/utils/result'
import { createFetcherError, type FetcherError } from '@/utils/error/fetcher'
import { createHttpScheme } from '@/utils/error/http'

export async function fetcher<T extends ZodType>({
    url,
    scheme,
    cache,
}: {
    url: Option<string>
    scheme: T
    cache?: RequestCache
}): Promise<Result<Option<core.output<T>>, FetcherError>> {
    const { notFound, forbidden, badRequest, internalServerError } =
        createHttpScheme.httpErrorStatusResponse

    const {
        returnNotSetApiUrl,
        returnNotFoundAPIUrl,
        returnNoPermission,
        returnBadRequest,
        returnSchemeError,
        returnUnknownError,
        returnFetchFunctionError,
        returnInternalServerError,
    } = createFetcherError

    const { createNone, createSome } = optionUtility
    const { createNg, createOk, checkPromiseReturn } = resultUtility

    if (url.isNone) {
        return createNg(returnNotSetApiUrl)
    }

    const res = await checkPromiseReturn({
        fn: () => fetch(url.value, { cache }),
        err: returnFetchFunctionError,
    })

    if (res.isErr) {
        return res
    }

    if (!res.value.ok) {
        const status = res.value.status

        switch (status) {
            case notFound:
                return createNg(returnNotFoundAPIUrl)
            case forbidden:
                return createNg(returnNoPermission)
            case badRequest:
                return createNg(returnBadRequest)
            case internalServerError:
                return createNg(returnInternalServerError)
            default:
                return createNg(returnUnknownError)
        }
    }

    const resValue = await res.value.json()

    const judgeType = scheme.safeParse(resValue)

    if (judgeType.error !== undefined) {
        return createNg(returnSchemeError)
    }

    const okValue = judgeType.data

    if (okValue === undefined || okValue === null) {
        return createOk(createNone())
    }

    return createOk(createSome(okValue))
}
