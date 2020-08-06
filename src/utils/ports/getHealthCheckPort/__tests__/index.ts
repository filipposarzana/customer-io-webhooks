import { getHealthCheckPort } from '..'

const originalProcessEnv = process.env

afterEach(() => {
  process.env = originalProcessEnv
})

it('should correctly has defaulted HEALTHCHECK_PORT', () => {
  process.env = {
    ...originalProcessEnv,
    HEALTHCHECK_PORT: undefined,
  }

  expect(getHealthCheckPort()).toBe('8086')
})

it('should correctly has set HEALTHCHECK_PORT', () => {
  process.env = {
    ...originalProcessEnv,
    HEALTHCHECK_PORT: '8087',
  }

  expect(getHealthCheckPort()).toBe('8087')
})
