import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import importPlugin from "eslint-plugin-import";

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,
    globalIgnores([
        ".next/**",
        "out/**",
        "build/**",
        "next-env.d.ts",
    ]),
    {
        plugins: {
            import: importPlugin,
        },
        rules: {
            // 1. Sortering av imports
            "import/order": [
                "error",
                {
                    "groups": [
                        "builtin",
                        "external",
                        "internal",
                        ["parent", "sibling"],
                        "index",
                        "object",
                    ],
                    "pathGroups": [
                        { "pattern": "react", "group": "external", "position": "before" },
                        { "pattern": "@mui/**", "group": "external", "position": "after" },
                    ],
                    "pathGroupsExcludedImportTypes": ["react"],
                    "newlines-between": "always",
                    "alphabetize": { "order": "asc", "caseInsensitive": true },
                },
            ],

            // 2. Semikolon og trailing commas (ESLint regler)
            "semi": ["error", "always"],
            "comma-dangle": ["error", "always-multiline"],

            // 3. Luft i brackets og andre stilvalg
            "object-curly-spacing": ["error", "always"],
            "no-console": ["warn", { allow: ["warn", "error"] }],

            // Ignorer ubrukte variabler som starter med understrek (f.eks _robotoMono)
            "@typescript-eslint/no-unused-vars": ["warn", {
                "argsIgnorePattern": "^_",
                "varsIgnorePattern": "^_",
            }],
        },
    },
]);

export default eslintConfig;