import { appConfig } from '@/shared/config/config'
import { type Option } from '@/utils/option'
import { APIScheme } from '../model/model-res'
import { parseApi } from './parse-api'
import { type Result } from '@/utils/result'
import type { APIView } from '../model/model-view'

import { hasParseFetcher } from '@/service/fetcher-get'
import type { FetcherError } from '@/utils/error/fetcher'

export async function getCharacter(): Promise<
  Result<Option<Array<APIView>>, FetcherError>
> {
  const url: Option<string> = appConfig.apiKey

  return await hasParseFetcher({
    url,
    scheme: APIScheme,
    parse: parseApi,
  })
}
