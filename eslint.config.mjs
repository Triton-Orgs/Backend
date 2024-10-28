import js from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import globals from "globals";

export default [
    // Include ESLint's recommended config for JS
    js.configs.recommended,

    // Add custom configuration
    {
        files: ["**/*.ts", "**/*.tsx"], // Target TypeScript files
        languageOptions: {
            globals: {
                ...globals.node,
            },
            parser: typescriptParser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            "@typescript-eslint": typescriptPlugin,
        },
        rules: {
            // TypeScript-specific rules
            "@typescript-eslint/no-unused-vars": "warn",
            "@typescript-eslint/explicit-function-return-type": "off",
        },
    },

    prettierConfig
];
