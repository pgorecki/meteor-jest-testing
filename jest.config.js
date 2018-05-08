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
    //'<rootDir>/jest-meteor/',
    // '<rootDir>/node_modules/jest-meteor-stubs/lib/',
    '<rootDir>/jest-meteor/src/',
  ],
  moduleNameMapper: {
    '^(.*):(.*)$': '$1_$2',
    '^/imports/(.*)$': '<rootDir>/imports/$1'
  },
  unmockedModulePathPatterns: [
    '/^imports\\/.*\\.jsx?$/',
    '/^node_modules/',
  ],
  notify: true,
};