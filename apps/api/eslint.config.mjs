import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default [
  js.configs.recommended,
  {
    files: ['src/**/*.ts'],
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
      globals: {
        console: 'readonly',
        process: 'readonly',
        module: 'readonly',
        require: 'readonly',
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    ignores: ['dist/**'],
  },
];
