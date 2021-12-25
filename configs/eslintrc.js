module.exports = {
  extends: ['standard'],
  plugins: [],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    process: 'readonly',
  },
  rules: {
    'max-statements': 'error',
  },
}
