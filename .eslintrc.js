module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    amd: true,
  },
  extends: ['eslint:recommended', 'plugin:jsx-a11y/recommended', 'next/core-web-vitals', 'next', 'prettier'],
  rules: {
    semi: ['error', 'always'],
  },
  plugins: ['jsx-a11y', 'prettier'],
};
