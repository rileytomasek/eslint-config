const jestRules = require('./rules/jest');
const jestDomRules = require('./rules/jest-dom');

/**
 * @see https://github.com/eslint/eslint/issues/3458
 * @see https://www.npmjs.com/package/@rushstack/eslint-patch
 */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  plugins: ['jest', 'jest-dom'],
  env: {
    node: true,
  },
  overrides: [
    {
      files: ['**/__tests__/**/*', '**/*.{spec,test}.*'],
      env: {
        'jest/globals': true,
      },
      rules: {
        ...jestRules,
        ...jestDomRules,
      },
    },
  ],
};
