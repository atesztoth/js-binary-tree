module.exports = {
  moduleFileExtensions: ['js', 'ts'],
  transform: { '\\.(ts|tsx)$': 'ts-jest' },
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/ts-build/', '<rootDir>/babel-build/']
}
