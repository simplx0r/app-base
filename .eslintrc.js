/** Разрешенные импорты (с публичными API) */
const ALLOWED_PATH_GROUPS = ['shared', 'shared/**', 'pages', 'features', 'models'].map(
  (pattern) => ({
    pattern,
    group: 'internal',
    position: 'after',
  }),
);
/** Для запрета приватных путей */
const DENIED_PATH_GROUPS = [
  // Private imports are prohibited, use public imports instead
  'app/**',
  'pages/**',
  'features/**',
  'shared/*/**',
  'models.gen',
  // Prefer absolute imports instead of relatives (for root modules)
  '../**/app',
  '../**/pages',
  '../**/features',
  '../**/shared',
  '../**/models',
];

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
  },
  plugins: ['react', '@typescript-eslint', 'unicorn'],
  extends: [
    'airbnb',
    'airbnb/hooks',

  ],
  overrides: [
    {
      // enable eslint-plugin-testing-library rules or preset only for matching files!
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:jest/recommended', 'plugin:jest-dom/recommended', 'plugin:testing-library/react'],
    },
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:import/typescript'],
    },
  ],
  rules: {
    // imports
    'import/first': 2,
    'import/no-unresolved': 0,
    'import/order': [
      2,
      {
        pathGroups: ALLOWED_PATH_GROUPS,
        pathGroupsExcludedImportTypes: ['builtin'],
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      },
    ],
    // TODO: specify message: ("Please use allowed public API (not private imports!)")
    'no-restricted-imports': [2, { patterns: DENIED_PATH_GROUPS }],
    // // variables
    // "prefer-const": 1,
    // "no-var": 1,
    // // base
    camelcase: [1, { ignoreDestructuring: true, ignoreImports: true, properties: 'never' }],
    'no-else-return': 1,
    // "max-len": [1, { code: 120 }],
    // "dot-notation": 2,
    // "eol-last": 2,
    // // alert, console
    // "no-alert": 1,
    // "no-console": 0,
    // // equals
    // "eqeqeq": 1,
    'no-eq-null': 1,
    // // function
    'max-params': [1, 2],
    'max-lines-per-function': [1, 48],
    // "arrow-parens": [2, "always"],
    // plugin:unicorn
    'unicorn/no-for-loop': 1,
    'unicorn/no-abusive-eslint-disable': 1,
    'unicorn/no-array-instanceof': 1,
    'unicorn/no-zero-fractions': 1,
    'unicorn/prefer-includes': 1,
    'unicorn/prefer-text-content': 1,
    'unicorn/import-index': 1,
    'unicorn/throw-new-error': 1,
    'unicorn/better-regex': 1,
    'unicorn/no-useless-spread': 1,
    'unicorn/string-content': 1,
    'unicorn/prefer-switch': 1,
    'unicorn/prefer-array-flat-map': 1,
    'unicorn/no-useless-promise-resolve-reject': 1,
    'unicorn/consistent-destructuring': 1,
    'import/extensions': 0,
    'import/prefer-default-export': 0,

    'react/jsx-filename-extension': [1, { extensions: ['.js', '.tsx'] }],

  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
    react: {
      version: 'detect',
    },
  },

};
