import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    vite: {
        plugins: [vanillaExtractPlugin()]
    },
    runtimeConfig: {
        public: {
            NUXT_PUBLIC_API_KEY: process.env.NUXT_PUBLIC_API_KEY
        }
    }
});
