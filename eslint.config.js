import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
      parser: tsParser, 
      parserOptions: {
        ecmaFeatures: {
          jsx: true, 
        },
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      "react": pluginReact,
    },
    rules: {
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended, 
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"], 
];
