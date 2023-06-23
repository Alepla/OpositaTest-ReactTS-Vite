import React from "react"
import { Mock, vi } from "vitest"
import Button from "../../../src/components/common/button/button"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { CommonFixture } from "../../fixtures/common"

describe("Button", () => {
  it("should be enabled by default", async () => {
    SUT.render()

    expect(SUT.button()).toBeEnabled()
  })

  it("should emit event when click", async () => {
    SUT.render()

    await SUT.click()

    expect(SUT.eventSpy).toHaveBeenCalled()
  })

  it("should set disabled status", async () => {
    const { rerender } = SUT.render()
    expect(SUT.button()).toBeEnabled()

    rerender(SUT.disabled())

    expect(SUT.button()).toBeDisabled()
  })
})

class SUT {
  static eventSpy: Mock<any, any> = vi.fn()

  static render() {
    return render(
      <Button className="aButton" onClick={this.eventSpy} label={CommonFixture.buttonName} />
    )
  }

  static disabled() {
    return (
      <Button
        className="aButton"
        label={CommonFixture.buttonName}
        onClick={this.eventSpy}
        disabled={true}
      />
    )
  }

  static async click() {
    await userEvent.click(SUT.button())
  }

  static button() {
    return screen.getByRole("button", { name: CommonFixture.buttonName })
  }
}