module.exports = {
  extends: [
    "next",
    "turbo",
    "plugin:security/recommended",
    "plugin:@microsoft/sdl/required",
    //"plugin:jest/recommended",
    "plugin:storybook/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  plugins: ["prettier"],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
  rules: {
    "prettier/prettier": "error",
    "@next/next/no-html-link-for-pages": "off",
  },
}
