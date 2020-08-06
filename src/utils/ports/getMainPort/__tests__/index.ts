import { getMainPort } from '..'

const originalProcessEnv = process.env

afterEach(() => {
  process.env = originalProcessEnv
})

it('should correctly has defaulted PORT', () => {
  process.env = {
    ...originalProcessEnv,
    PORT: undefined,
  }

  expect(getMainPort()).toBe('3000')
})

it('should correctly has set PORT', () => {
  process.env = {
    ...originalProcessEnv,
    PORT: '3001',
  }

  expect(getMainPort()).toBe('3001')
})
