import React from "react"
import { vi } from "vitest"
import { act, render, screen } from "@testing-library/react"
import PostsBoard from "../../../src/components/postsBoard/PostsBoard"
import PostsStub from "../../stubs/posts"

describe("Posts Board", () => {
  beforeAll(() => {
    PostsStub.spyRetrievePostsData()
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it("retrieves the posts data", async () => {
    await SUT.render()

    expect(PostsStub.retrievePostsDataSpy).toHaveBeenCalledTimes(1)
  })

  it("show a list of posts", async () => {
    await SUT.render()

    expect(SUT.posts()).toHaveLength(2)
  })
})

class SUT {
  static async render() {
    await act(async () => {
      render(<PostsBoard />)
    })
  }

  static posts(): Array<HTMLElement> {
    return screen.getAllByText(/post title/)
  }
}
