import { moveElementToEnd, moveElementToStart } from "../../src/helpers/moveArrayElement"

describe("Move Array Element", () => {
  it("put first the third element of the array", () => {
    const unorderedList: Array<number> = [1, 2, 3, 4, 5, 6]

    const orderedList = moveElementToStart<number>(unorderedList, 2)
    const expectedOrderedList: Array<number> = [3, 1, 2, 4, 5, 6]

    expect(orderedList).toStrictEqual(expectedOrderedList)
  })

  it("put last the third element of the array", () => {
    const unorderedList: Array<number> = [1, 2, 3, 4, 5, 6]

    const orderedList = moveElementToEnd<number>(unorderedList, 2)
    const expectedOrderedList: Array<number> = [1, 2, 4, 5, 6, 3]

    expect(orderedList).toStrictEqual(expectedOrderedList)
  })
})