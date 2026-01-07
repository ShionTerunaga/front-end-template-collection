import { core, ZodType } from 'zod'
import { Option, optionUtility } from '@/utils/option'
import { resultUtility, Result } from '@/utils/result'
import { fetcher } from './fetcher'
import { FetcherError } from '@/utils/error/fetcher/fetcher-error'

export async function hasParseFetcher<T extends ZodType, S>({
    url,
    scheme,
    cache,
    parse,
}: {
    url: Option<string>
    scheme: T
    cache?: RequestCache
    parse: (scheme: core.output<T>) => Result<Option<S>, FetcherError>
}): Promise<Result<Option<S>, FetcherError>> {
    const { createOk } = resultUtility
    const { createNone } = optionUtility

    const fetcherResult = await fetcher<T>({
        url,
        scheme,
        cache,
    })

    if (fetcherResult.isErr) {
        return fetcherResult
    }

    if (fetcherResult.value.isNone) {
        return createOk(createNone())
    }

    return parse(fetcherResult.value.value)
}
