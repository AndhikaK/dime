// eslint.config.js
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");

module.exports = defineConfig([
  expoConfig,

  {
    ignores: ["dist/*"],

    plugins: {
      "simple-import-sort": require("eslint-plugin-simple-import-sort"),
    },

    rules: {
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            // 1. Side effect imports
            ["^\\u0000"],

            // 2. react + packages
            ["^react$", "^@?\\w"],

            // 3. absolute + alias + others
            ["^@", "^"],

            // 4. relative imports
            ["^\\./"],

            // 5. style modules
            ["^.+\\.(module\\.css|module\\.scss)$"],

            // 6. media assets
            ["^.+\\.(gif|png|svg|jpg)$"],
          ],
        },
      ],
    },
  },
]);
