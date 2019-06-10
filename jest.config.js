/**
 * @file Jest configuration.
 */

module.exports = {
  rootDir: 'src',
  testRegex: '/src/__tests__/.*spec\\.js$',
  setupFiles: ['<rootDir>/config/setupTests.js'],
};
