import { errorUtils } from "../../src/helpers/logError"
import { vi } from "vitest"
import { HelpersFixture } from "../fixtures/helpers"

describe("Error Utils", () => {
  describe("logError", () => {
    it("should log the error message", () => {
      const consoleErrorSpy = vi.spyOn(console, "error")

      errorUtils.logError(HelpersFixture.aMessage, { error: HelpersFixture.anError })

      expect(consoleErrorSpy).toHaveBeenCalledWith(HelpersFixture.aMessage, HelpersFixture.anError)
      consoleErrorSpy.mockRestore()
    })
  })

  describe("getErrorMessage", () => {
    it("should return the error message from an Error object", () => {
      const error = new Error(HelpersFixture.anError)
      const errorMessage = errorUtils.getErrorMessage(error)

      expect(errorMessage).toBe(HelpersFixture.anError)
    })

    it("should return the string representation of the error", () => {
      const errorMessage = errorUtils.getErrorMessage(HelpersFixture.anError)

      expect(errorMessage).toBe(HelpersFixture.anError)
    })
  })
})
