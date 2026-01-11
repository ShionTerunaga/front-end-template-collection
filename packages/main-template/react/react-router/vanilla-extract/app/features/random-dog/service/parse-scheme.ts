import { resultUtility, type Result } from '@/utils/result'
import type { RandomDogRes } from '../model/random-dog'
import { createFetcherError } from '@/utils/error/fetcher'
import { type Option, optionUtility } from '@/utils/option'
import type { FetcherError } from '@/utils/error/fetcher'

export function parseScheme(
    scheme: RandomDogRes,
): Result<Option<RandomDogRes>, FetcherError> {
    const { createOk, createNg } = resultUtility
    const { createSome } = optionUtility

    if (scheme.status !== 'success') {
        return createNg(createFetcherError.returnParseError)
    }

    return createOk(createSome(scheme))
}
