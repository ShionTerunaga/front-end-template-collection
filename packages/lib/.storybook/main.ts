import path from "path";
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
    stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [],
    framework: {
        name: "@storybook/react-vite",
        options: {}
    },
    async viteFinal(config) {
        config.resolve = config.resolve ?? {};
        const alias = config.resolve.alias ?? [];
        const replacementPath = path.resolve(process.cwd(), "src/");
        if (Array.isArray(alias)) {
            alias.push({
                find: "@/",
                replacement: replacementPath
            });
        } else if (typeof alias === "object") {
            (config.resolve.alias as Record<string, string>)["@/"] =
                replacementPath;
        }
        config.resolve.alias = alias;
        config.plugins = config.plugins ?? [];
        try {
            const { default: tsconfigPaths } = await import(
                "vite-tsconfig-paths"
            );
            config.plugins.push(tsconfigPaths());
        } catch (e) {
            console.warn(
                "vite-tsconfig-paths is not installed. Install it to enable tsconfig path resolution."
            );
        }

        try {
            const { vanillaExtractPlugin } = await import(
                "@vanilla-extract/vite-plugin"
            );
            config.plugins.push(vanillaExtractPlugin());
        } catch (e) {
            console.warn(
                "@vanilla-extract/vite-plugin is not installed. Install it to enable vanilla-extract support."
            );
        }

        return config;
    }
};

export default config;
