module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['.', './src'],
      },
    },
    'import/ignore': ['react-native'],
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
      arrowFunctions: true,
    },
  },
  plugins: ['react', 'react-native', 'simple-import-sort'],
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:import/typescript',

    // "plugin:react-native/all",
    // Disable rules that conflict with Prettier
    // Prettier must be last to override other configs
    'prettier',
  ],
  rules: {
    'no-unused-vars': 'error',
    'import/no-unresolved': 'error',
    'no-nested-ternary': 'warn',
    'no-await-in-loop': 'warn',
    eqeqeq: 'warn',
    'react/no-array-index-key': 'warn',
    'react-native/no-inline-styles': 'warn',
    'react-native/no-unused-styles': 'warn',
    'prefer-destructuring': 'off',
    'react/destructuring-assignment': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'import/named': 'off',
    'import/no-named-as-default': 'off',
    'comma-dangle': 'off', // https://eslint.org/docs/rules/comma-dangle
    'function-paren-newline': 'off', // https://eslint.org/docs/rules/function-paren-newline
    'global-require': 'off', // https://eslint.org/docs/rules/global-require
    'import/no-dynamic-require': 'off', // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
    'no-inner-declarations': 'off', // https://eslint.org/docs/rules/no-inner-declarations
    'class-methods-use-this': 'off',
    'import/extensions': 'off',
    'react/react-in-jsx-scope': 'off', // not needed anymore from react 17
    'no-console': ['error', {allow: ['warn', 'error', 'info']}],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
  },
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      env: {
        node: true,
        browser: true,
        es6: true,
        jest: true,
      },
      parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
          jsx: true, // Allows for the parsing of JSX
          arrowFunctions: true,
        },
      },
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          typescript: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            paths: ['.', './src/components', 'src'],
          },
        },
        'import/ignore': ['react-native'],
      },
      parser: '@typescript-eslint/parser', // Specifies the ESLint parser
      plugins: ['react', 'react-native', '@typescript-eslint'],
      extends: [
        '@react-native-community',
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/eslint-recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'prettier', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier,
      ],
      rules: {
        'no-shadow': 1,
        '@typescript-eslint/no-unused-vars': ['error'],
        'import/no-unresolved': 'error',
        'no-nested-ternary': 'warn',
        'no-await-in-loop': 'warn',
        eqeqeq: 'warn',
        'react/no-array-index-key': 'warn',
        'react/prop-types': 'off',
        'react-native/no-inline-styles': 'warn',
        'react-native/no-unused-styles': 'warn',
        'prefer-destructuring': 'off',
        'react/destructuring-assignment': 'off',
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react-hooks/exhaustive-deps': 'off',
        'comma-dangle': 'off', // https://eslint.org/docs/rules/comma-dangle
        'function-paren-newline': 'off', // https://eslint.org/docs/rules/function-paren-newline
        'global-require': 'off', // https://eslint.org/docs/rules/global-require
        'import/no-dynamic-require': 'off', // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
        'no-inner-declarations': 'off', // https://eslint.org/docs/rules/no-inner-declarations
        'class-methods-use-this': 'off',
        'import/extensions': 'off',
        'no-console': ['error', {allow: ['warn', 'error', 'info']}],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'react/react-in-jsx-scope': 'off', // not needed anymore from react 17,
        '@typescript-eslint/no-explicit-any': 'warn',
      },
    },
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              //`react` related packages come first.
              ['^react'],
              // cb-ui
              ['^@creditbook/cb-ui?\\w'],
              // Normal library imports
              ['^[a-z]'],
              // Internal absolute imports (will be useful once absolute imports PR is merged).
              ['^@?\\w'],
              // Side effect imports.
              ['^\\u0000'],
              // Parent imports. Put `..` last.
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              // Other relative imports. Put same-folder imports and `.` last.
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              // Style imports.
              ['^.+\\.?(css)$'],
            ],
          },
        ],
      },
    },
  ],
};
