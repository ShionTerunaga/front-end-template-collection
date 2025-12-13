import { envParse } from "@/utils/env-parse";

export const appConfig = {
    apiKey: envParse(process.env.NEXT_PUBLIC_API_KEY)
};
