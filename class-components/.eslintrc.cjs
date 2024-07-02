module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true, react: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "eslint-config-prettier",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "react-compiler", "@typescript-eslint"],
  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "react-compiler/react-compiler": "error",
    "@typescript-eslint/no-explicit-any": "error",
  },
};
