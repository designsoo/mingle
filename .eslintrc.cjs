module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'react', 'react-hooks', 'import'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'linebreak-style': 2,
    'require-await': 'error',
    'no-console': 'warn',
    'import/prefer-default-export': 'off',
    'import/default': 0,
    'import/no-unresolved': 'off',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'object', 'unknown', 'index'],
        pathGroups: [
          { pattern: 'react', group: 'external', position: 'before' },
          { pattern: 'react/**', group: 'external', position: 'before' },
          { pattern: '@/api/**', group: 'unknown' },
          { pattern: '@/components/**', group: 'unknown' },
          { pattern: '@/types/**', group: 'unknown' },
          { pattern: '@/constants/**', group: 'unknown' },
          { pattern: '@/pages/**', group: 'unknown' },
          { pattern: '@/hooks/**', group: 'unknown' },
          { pattern: '@/utils/**', group: 'unknown' },
          { pattern: './**', group: 'index' },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
  },
};
