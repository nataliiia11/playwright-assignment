import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import importPlugin from 'eslint-plugin-import'; // 👈 добавить импорт
import prettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      import: importPlugin, // 👈 подключить плагин
    },
    ignores: ['node_modules', 'dist', 'allure-report', 'test-results', 'playwright-report'],
    rules: {
      'no-console': 'error',
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'no-duplicate-imports': 'error',
      'prefer-const': 'error',
      'import/named': 'off',
    },
  },
  prettier,
];
