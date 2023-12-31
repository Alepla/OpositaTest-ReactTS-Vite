export const calculateRange = (start: number, end: number): Array<number> => {
  const length: number = end - start + 1
  const result: Array<number> = new Array(length)

  for (let i = 0; i < length; i++) {
    result[i] = start + i
  }

  return result
}
