module.exports = {
  parserOptions: {
    ecmaVersion: 2017,
  },
  env: {
    es6: true,
    node: true,
    mocha: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'warn',
  },
};
