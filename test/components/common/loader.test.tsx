import React from "react"
import { render, screen } from "@testing-library/react"
import { Loader } from "../../../src/components/common"

describe("Loader", () => {
  it("is visible", () => {
    SUT.render()

    expect(SUT.loader()).toBeInTheDocument()
  })
})

class SUT {
  static render() {
    render(<Loader />)
  }

  static loader() {
    return screen.queryByLabelText("loader")
  }
}
