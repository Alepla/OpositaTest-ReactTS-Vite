import { calculateRange } from "../../src/helpers/calculateRange"

describe("Caculate Range", () => {
  it("have an array with 10 elements", () => {
    const range: Array<number> = calculateRange(1, 10)

    expect(range).toHaveLength(10)
  })

  it("have an array with 5 elements", () => {
    const range: Array<number> = calculateRange(1, 5)

    expect(range).toHaveLength(5)
  })
})
