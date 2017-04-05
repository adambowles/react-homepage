module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  'extends': [
    'standard',
    'standard-react',
  ], // 'eslint:recommended',
  'parserOptions': {
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true,
    },
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'indent': [
      'warn',
      2,
    ],
    'linebreak-style': [
      'warn',
      'unix',
    ],
    'quotes': [
      'warn',
      'single',
    ],
    'semi': [
      'warn',
      'never',
    ],
    'comma-dangle': [
      'warn',
      'always-multiline',
    ],
  },
};