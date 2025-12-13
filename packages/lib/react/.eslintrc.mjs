export default {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: { jsx: true }
    },
    plugins: ["@typescript-eslint"],
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    rules: {
        "@typescript-eslint/consistent-type-imports": [
            "error",
            { prefer: "type-imports" }
        ],
        "@typescript-eslint/no-unused-vars": [
            "warn",
            { vars: "all", args: "after-used", ignoreRestSiblings: true }
        ],
        "no-unused-vars": "off"
    }
};
