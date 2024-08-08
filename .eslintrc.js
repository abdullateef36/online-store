module.exports = {
    parser: '@babel/eslint-parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
    ],
    plugins: [
      'react',
    ],
    rules: {
      'react/react-in-jsx-scope': 'off', // Disable this rule if using the new JSX transform
    },
  };
  