import { optionUtility } from './option'
import type { Option } from './option'

export function envParse(env: string | undefined): Option<string> {
  const { createNone, createSome } = optionUtility

  if (env === undefined) {
    return createNone()
  }

  return createSome<string>(env)
}
