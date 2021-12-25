module.exports = {
  env: {
    jest: true,
  },
  extends: ['plugin:jest/recommended'],
  plugins: ['jest'],
  rules: {
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
  },
}
