module.exports = {
  env: {
    browser: true,
    es2021: true,
    mocha: true
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
      "no-unused-vars" : 0,
      "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
      'import/extensions': [ 'off', ],
  },
};
