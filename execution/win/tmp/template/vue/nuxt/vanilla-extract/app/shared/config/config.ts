import { envParse } from "@/utils/env-parse";

export const appConfig = function () {
    const config = useRuntimeConfig();

    return {
        apiKey: envParse(config.public.NUXT_PUBLIC_API_KEY)
    };
};
