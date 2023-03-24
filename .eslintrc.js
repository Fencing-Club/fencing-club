module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-piste`
  extends: ["piste"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
