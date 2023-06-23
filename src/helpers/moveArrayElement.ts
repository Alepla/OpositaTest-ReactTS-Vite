export const moveElementToStart = <T>(array: Array<T>, position: number): Array<T> => {
  if (position < 0 || position >= array.length) {
    return array
  }

  const [element] = array.splice(position, 1)
  const newArray = [element, ...array]

  return newArray
}

export const moveElementToEnd = <T>(array: Array<T>, position: number): Array<T> => {
  if (position < 0 || position >= array.length) {
    return array
  }

  const [element] = array.splice(position, 1)
  const newArray = [...array, element]

  return newArray
}
