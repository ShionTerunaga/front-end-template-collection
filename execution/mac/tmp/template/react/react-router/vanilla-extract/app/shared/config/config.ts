import { envParse } from '@/utils/env-parse'

export const appConfig = {
    apiKey: envParse(import.meta.env.VITE_API_KEY),
    apiKey2: envParse(import.meta.env.VITE_API_KEY2),
}
