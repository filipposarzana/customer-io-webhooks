import { format } from 'date-fns'
import { today } from '..'

const fixedTime = 1572966742858
const fixedTimeFormatted = format(fixedTime, 'yyyy-MM-dd')
const originalDateNow = Date.now

beforeAll(() => {
  Date.now = jest.fn(() => fixedTime)
})

afterAll(() => {
  Date.now = originalDateNow
})

it('should generate date with yyyy-MM-dd format', () => {
  expect(today()).toBe(fixedTimeFormatted)
})
