import { moveElementsToStart } from "../../src/helpers/moveElementsToStart"
import { HelpersFixture } from "../fixtures/helpers"

describe("Sort Array Element", () => {
  it("sort the array by the liked property", () => {
    const sortedList = moveElementsToStart(HelpersFixture.aUnsortedArray, "liked")

    expect(sortedList).toStrictEqual(HelpersFixture.aSortedArray)
  })
})
