import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: "src/app/",
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    vite: {
        plugins: [vanillaExtractPlugin()]
    }
});
