import React from "react"
import { Pagination } from "../../../src/components/common"
import { fireEvent, render, screen } from "@testing-library/react"
import { Mock, vi } from "vitest"
import { PostsFixture } from "../../fixtures/posts"

vi.mock("../../../src/hooks/usePagination", () => {
  return {
    usePagination: () => ({
      paginationRange: ["1", "2", "3", "4", "5", "...", "15"],
    }),
  }
})

describe("Pagination", () => {
  it("shows the pagination with page one active by default", () => {
    SUT.render()

    expect(SUT.pageOneButton()).toBeInTheDocument()
    expect(SUT.pageFifteenButton()).toBeInTheDocument()
    expect(SUT.pageSixButton()).not.toBeInTheDocument()
  })

  it("sends the selected page number to parent component ", () => {
    SUT.render()

    SUT.clickPageFiveButton()

    const pagePosition = 4
    expect(SUT.pageSpy).toHaveBeenCalledWith(pagePosition)
  })
})

class SUT {
  static pageSpy: Mock<any, any> = vi.fn()

  static render() {
    render(<Pagination postsPerPage={10} totalPosts={150} onSelectPage={SUT.pageSpy} />)
  }

  static clickPageFiveButton(): void {
    fireEvent.click(this.pageFiveButton())
  }

  static pageOneButton(): HTMLElement {
    return screen.getByRole("button", { name: PostsFixture.aPageOneButton })
  }

  static pageFiveButton(): HTMLElement {
    return screen.getByRole("button", { name: PostsFixture.apageFiveButton })
  }

  static pageSixButton(): HTMLElement | null {
    return screen.queryByRole("button", { name: PostsFixture.aPageSixButton })
  }

  static pageFifteenButton(): HTMLElement {
    return screen.getByRole("button", { name: PostsFixture.aPageFifteenButton })
  }
}
