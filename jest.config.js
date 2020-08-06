require('dotenv').config()

module.exports = {
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testEnvironment: 'node',
  testRegex: '/__tests__/.*\\.ts$',
  moduleFileExtensions: ['js', 'ts'],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
  },
}
