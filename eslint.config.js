// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");
const simpleImportSort = require("eslint-plugin-simple-import-sort");

module.exports = defineConfig([
  expoConfig,
  eslintPluginPrettierRecommended,
  {
    ignores: ["dist/*", "src/uniwind-types.d.ts", "node_modules", "/.expo"],
  },
  // sort import
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^react$", "^react-native$"], // 1. react and react-native first
            ["^@react-navigation"], // 2. react-navigation
            ["^@?\\w"], // 3. other node_modules
            ["^@/navigation"], // 4. internal @/ aliases — navigation layer
            ["^@/features"], // 5. internal @/ aliases — features
            ["^@/components", "^@/hooks", "^@/utils", "^@/"], // 6. internal @/ aliases — shared
            ["^\\."], // 7. relative imports
            ["^.*\\u0000$"], // 8. type imports last
          ],
        },
      ],
      "simple-import-sort/exports": "error",
    },
  },
]);
