import type { Dict } from '@/shared/types/object'
import { optionUtility, type Option } from '@/utils/option'
import { resultUtility, type Result } from '@/utils/result'

export const fetcherCollection = (function () {
  const { checkPromiseReturn } = resultUtility
  const { isSome } = optionUtility

  const get = async <E>({
    url,
    cache,
    headers,
    fetchErrorHandler,
  }: {
    url: string
    cache?: RequestCache
    headers?: Dict<string>
    fetchErrorHandler: (error: unknown) => Result<never, NonNullable<E>>
  }): Promise<Result<Response, NonNullable<E>>> => {
    const responseResult = await checkPromiseReturn<Response, NonNullable<E>>({
      fn: async () => await fetch(url, { cache, headers }),
      err: fetchErrorHandler,
    })

    return responseResult
  }

  const post = async <E>({
    url,
    headers,
    body,
    fetchErrorHandler,
  }: {
    url: string
    headers?: Dict<string>
    body: Option<string>
    fetchErrorHandler: (error: unknown) => Result<never, NonNullable<E>>
  }): Promise<Result<Response, NonNullable<E>>> => {
    const bodyValue = isSome(body) ? body.value : null

    const responseResult = await checkPromiseReturn<Response, NonNullable<E>>({
      fn: async () =>
        await fetch(url, {
          method: 'POST',
          headers,
          body: bodyValue,
        }),
      err: fetchErrorHandler,
    })

    return responseResult
  }

  return {
    get,
    post,
  }
})()
