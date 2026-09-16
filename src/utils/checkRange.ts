const IMAGE_WIDTH: number = 1152
const IMAGE_HEIGHT: number = 648
const RANGE_SIZE = 50

export function createNumberRangeX(digit: number): [number, number] {
  const range = RANGE_SIZE / IMAGE_WIDTH
  // const numberRange = []
  const lowerLimit = Number((digit - 0.5 * range).toFixed(2))
  const upperLimit = Number((digit + 0.5 * range).toFixed(2))
  return [lowerLimit, upperLimit]
}

export function createNumberRangeY(digit: number): [number, number] {
  const range = RANGE_SIZE / IMAGE_HEIGHT
  // const numberRange = []
  const lowerLimit = Number((digit - 0.5 * range).toFixed(2))
  const upperLimit = Number((digit + 0.5 * range).toFixed(2))
  return [lowerLimit, upperLimit]
}

export function checkIfInRange(range: [number, number], digit: number) {
  const [lowerLimit, upperLimit] = range
  if (digit >= lowerLimit && digit <= upperLimit) return true
  return false
}
