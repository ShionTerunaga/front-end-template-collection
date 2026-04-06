import { builtinModules } from "node:module";
import { defineConfig } from "vite";

const external = new Set(
    builtinModules.flatMap((moduleName) => {
        const normalizedName = moduleName.startsWith("node:")
            ? moduleName.slice("node:".length)
            : moduleName;

        return [normalizedName, `node:${normalizedName}`];
    })
);

export default defineConfig({
    build: {
        target: "node24",
        outDir: "bin",
        emptyOutDir: false,
        minify: false,
        sourcemap: false,
        lib: {
            entry: "src/index.ts",
            formats: ["es"],
            fileName: () => "index.mjs"
        },
        rollupOptions: {
            output: {
                banner: 'import { createRequire } from "node:module"; const require = createRequire(import.meta.url);'
            },
            external: [...external]
        }
    }
});
