module.exports = {
  extends: ["next", "turbo", "prettier"],
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
