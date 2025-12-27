import { core, ZodType } from 'zod'
import { type Option, optionUtility } from '@/utils/option'
import { type Result, resultUtility } from '@/utils/result'
import { type FetcherError, createFetcherError } from '@/utils/error/fetcher'
import { httpClient } from '@/lib/http-client'

export async function fetcher<T extends ZodType>({
  url,
  scheme,
}: {
  url: Option<string>
  scheme: T
  cache?: RequestCache
}): Promise<Result<Option<core.output<T>>, FetcherError>> {
  const { returnNotSetApiUrl, returnFetchFunctionError, returnSchemeError } =
    createFetcherError

  const { isNone } = optionUtility
  const { createNg } = resultUtility

  if (isNone(url)) {
    return createNg(returnNotSetApiUrl)
  }

  const client = httpClient<FetcherError>({
    baseUrl: url.value,
    urlSettingErrorHandler: returnNotSetApiUrl,
    fetchErrorHandler: () => createNg(returnFetchFunctionError),
    unknownError: returnFetchFunctionError,
  })

  const res = await client.get({
    endpoint: '',
    scheme,
    schemaErrorHandler: () => createNg(returnSchemeError),
  })

  return res
}
