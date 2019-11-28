module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable
    // ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended" // Enables eslint-plugin-prettier and eslint-config-prettier.
    // This will display prettier errors as ESLint errors.
    // Make sure this is always the last configuration in the extends array.
  ],
  rules: {
    "prettier/prettier": "error",
    indent: ["error", 2],
    "function-paren-newline": 0,
    "linebreak-style": ["error", "unix"],
    "@typescript-eslint/ban-ts-ignore": 0,
    "@typescript-eslint/no-explicit-any": 0
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  ignorePatterns: ["*flow.js", "dist", "ts-build", "babel-build"]
}
