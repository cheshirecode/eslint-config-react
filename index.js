module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 10,
    ecmaFeatures: {
      jsx: true,
    },
    tsconfigRootDir: __dirname
  },
  env: {
    browser: true,
    jest: true,
  },
  plugins: ['prettier', 'react', '@typescript-eslint', 'jsx-a11y'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
    'react-app',
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-unreachable': 'error',
    'no-console': 'error',
  },
};