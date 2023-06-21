import React from "react"
import { vi } from "vitest"
import { act, render, screen } from "@testing-library/react"
import PostsBoard from "../../../src/components/postsBoard/PostsBoard"
import PostsStub from "../../stubs/posts"
import { PostsFixture } from "../../fixtures/posts"

describe("Posts", () => {
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

    expect(await SUT.postsList()).toHaveLength(2)
  })
})

class SUT {
  static async render() {
    await act(async () => {
      render(<PostsBoard />)
    })
  }

  static async postsList(): Promise<Array<HTMLElement>> {
    return await screen.findAllByText(PostsFixture.aPostTitle)
  }
}
