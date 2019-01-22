module.exports = {
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'json'
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json'
    }
  },
  collectCoverageFrom: [
    'src/**/*.ts'
  ],
  coverageReporters: [
    'html', 'text'
  ],
  testMatch: [
    '**/test/**/*.+(ts|tsx|js)'
  ],
  testPathIgnorePatterns: [
    '__fixtures__', '__mocks__', '<rootDir>/build/'
  ]
}
