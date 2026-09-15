function createNumberRange(digit: number, dimension: number): [number, number] {
  // const numberRange = []
  const lowerLimit = Number(((digit - 25) / dimension).toFixed(2))
  const upperLimit = Number(((digit + 25) / dimension).toFixed(2))

  // for (let i = lowerLimit; i <= upperLimit; i++) {
  //   numberRange.push(i)
  // }
  // const filteredRange = numberRange.filter((value) => value >= 0)
  // return filteredRange
  return [lowerLimit, upperLimit]
}

function checkIfInRange(range: [number, number], digit: number) {
  const [lowerLimit, upperLimit] = range
  if (digit >= lowerLimit && digit <= upperLimit) return true
  return false
}

export { checkIfInRange, createNumberRange }
