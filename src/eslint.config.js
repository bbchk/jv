// eslint-disable-next-line import/no-unresolved
import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginImport from 'eslint-plugin-import';
import globals from 'globals';

export default defineConfig([
  js.configs.recommended,
  eslintConfigPrettier,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2025,
        // ...globals.jest,
        // ...globals.worker,
        "$": 'readonly',
        "$$": 'readonly'
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      prettier: eslintPluginPrettier,
      import: eslintPluginImport,
    },
    rules: {
      'prettier/prettier': 'error',
      'no-unused-vars': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      curly: 'error',
      'import/no-unresolved': [
        'off',
        {
          ignore: ['^/'],
        },
      ],
      'import/named': 'error',
      'import/default': 'error',
      'import/no-duplicates': 'error',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
        },
      ],
      'no-var': 'error',
      'prefer-const': 'error',
      'arrow-spacing': ['error', { before: true, after: true }],
      'no-multi-spaces': 'error',
      'space-infix-ops': 'error',
      'object-curly-spacing': ['error', 'always'],
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-alert': 'warn',
      'no-iterator': 'error',
      'no-new-wrappers': 'error',
      'no-prototype-builtins': 'error',
      'no-useless-return': 'error',
      'no-duplicate-case': 'error',
      'no-self-compare': 'error',
      'no-constant-condition': 'warn',
      'no-unused-expressions': 'error',
      'no-loop-func': 'error',
      'no-new-func': 'error',
      'no-debugger': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-template': 'error',
      'no-duplicate-imports': 'error',
      'no-useless-constructor': 'error',
      'rest-spread-spacing': ['error', 'never'],
      semi: 'error',
    },
  },
]);
