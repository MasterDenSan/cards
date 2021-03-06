module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "no-unused-vars": "warn",
    "no-console": "error",
    semi: ["warn", "always"],
    quotes: ["error", "double"],
    "jsx-quotes": ["error", "prefer-double"],
    "prefer-const": "error",
    "comma-dangle": ["error", "always-multiline"],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
      },
    ],

    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-var-requires": 0,
  },
  settings: {
    react: {
      version: "999.999.999",
    },
  },
};
