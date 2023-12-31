import { cleanNonSet } from "../../src/helpers/cleanNonSet"
import { HelpersFixture } from "../fixtures/helpers"

describe("Clean Non Set", () => {
  it("returns a cleanded object with undefined id", () => {
    const result = cleanNonSet(HelpersFixture.anInvalidObject)

    expect(result).toStrictEqual(HelpersFixture.aCleanedObject)
  })

  it("returns the same object", () => {
    const result = cleanNonSet(HelpersFixture.aValidObject)

    expect(result).toStrictEqual(HelpersFixture.aValidObject)
  })
})
