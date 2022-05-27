const { average } = require('../utils/for_testing')

describe.skip('Average', () => {
  test('of one value is the value of itself', () => {
    const result = average([2])
    expect(result).toBe(2)
  })
  test('of many is calculated correctly', () => {
    const result = average([1, 2, 3, 4, 5, 6])
    expect(result).toBe(3.5)
  })
  test('of empty array is calculated correctly', () => {
    const result = average([])
    expect(result).toBe(0)
  })
  test('of empty undefined is calculated correctly', () => {
    const result = average()
    expect(result).toBe(0)
  })
})
