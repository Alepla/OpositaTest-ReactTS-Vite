export const moveElementsToStart = <T, K extends keyof T>(
  array: Array<T>,
  property: K
): Array<T> => {
  return [...array].sort((a, b) => (b[property] ? 1 : 0) - (a[property] ? 1 : 0))
}
