import { envParse } from '@/utils/env-parse'

export const appConfig = {
  apiKey: envParse(import.meta.env.VITE_API_KEY),
}
