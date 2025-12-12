import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname
});

const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    {
        ignores: [
            "node_modules/**",
            ".next/**",
            "out/**",
            "build/**",
            "next-env.d.ts"
        ]
    },
    {
        languageOptions: {
            parserOptions: {
                project: "./tsconfig.json"
            }
        },
        plugins: {
            "@typescript-eslint": typescriptEslintPlugin
        },
        rules: {
            "@typescript-eslint/strict-boolean-expressions": [
                "error",
                {
                    allowString: false,
                    allowNumber: false,
                    allowNullableObject: false
                }
            ]
        }
    }
];

export default eslintConfig;
