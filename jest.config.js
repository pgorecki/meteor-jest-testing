module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleFileExtensions: [
    'js',
    'jsx',
  ],
  modulePaths: [
    '<rootDir>/node_modules/',
    '<rootDir>/.tests/__mocks__/packages/',
  ],
  moduleNameMapper: {
    '^/imports/(.*)$': '<rootDir>/imports/$1'
    // '^(.*):(.*)$': '$1_$2',
  },
  unmockedModulePathPatterns: [
    '/^imports\\/.*\\.jsx?$/',
    '/^node_modules/',
  ],
  notify: true,
};