import { getNumberAndAdd1 } from '../helpers'

describe('getNumberAndAdd1', () => {
  describe('converts from any data and adds 1', () => {
    it('works for null data', () => {
      const data = null
      const result = getNumberAndAdd1(data)
      expect(result).toBe(1)
    })
    it('works for numeric data', () => {
      const data = 1.1
      const result = getNumberAndAdd1(data)
      expect(result).toBe(2.1)
    })
    it('works for valid string data', () => {
      const data = '4'
      const result = getNumberAndAdd1(data)
      expect(result).toBe(5)
    })
    it('fails for invalid data', () => {
      const data = undefined
      const result = getNumberAndAdd1(data)
      expect(result).toBe(NaN)
    })
  })
})
