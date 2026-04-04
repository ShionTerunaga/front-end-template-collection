import { builtinModules } from "node:module";
import { defineConfig } from "vite";

const external = new Set([
    ...builtinModules,
    ...builtinModules.map((moduleName) => `node:${moduleName}`)
]);

export default defineConfig({
    build: {
        target: "node24",
        outDir: "bin",
        emptyOutDir: false,
        minify: false,
        sourcemap: false,
        lib: {
            entry: "src/index.ts",
            formats: ["cjs"],
            fileName: () => "index.js"
        },
        rollupOptions: {
            external: [...external]
        }
    }
});
