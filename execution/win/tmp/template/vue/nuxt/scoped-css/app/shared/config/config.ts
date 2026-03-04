import { envParse } from "@/utils/env-parse";

export const appConfig = {
    get apiKey() {
        const config = useRuntimeConfig();
        return envParse(config.public.NUXT_PUBLIC_API_KEY);
    }
};
