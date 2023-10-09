module.exports = {
  env: {
    browser: true,
    es2021: true,
    'vitest-globals/env': true
  },
  extends: [
    'eslint:recommended',
    '@vue/eslint-config-prettier',
    '@vue/eslint-config-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:vitest-globals/recommended',
    'plugin:vue-pug/vue3-recommended',
    'plugin:vue/vue3-essential',
    'plugin:prettier/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    extraFileExtensions: ['.js']
  },
  plugins: ['@typescript-eslint', 'prettier', 'vue'],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/no-unused-vars': 'warn'
  }
}
