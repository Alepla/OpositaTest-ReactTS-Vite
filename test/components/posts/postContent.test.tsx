import React from "react"
import { vi } from "vitest"
import PostContent from "../../../src/components/postsBoard/postItem/postContent/PostContent"
import PostsStub from "../../stubs/posts"
import { act, fireEvent, render, screen } from "@testing-library/react"
import { PostsFixture } from "../../fixtures/posts"

describe("Post Content", () => {
  beforeAll(() => {
    PostsStub.spyRetrieveComments()
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it("retrieves the comments of the post", async () => {
    await SUT.render()

    SUT.clickPost()

    expect(PostsStub.retrieveCommentsSpy).toHaveBeenCalledTimes(1)
  })
})

class SUT {
  static async render() {
    await act(async () => {
      render(
        <PostContent post={PostsFixture.posts[0]} onCloseModal={() => {}} onAddFavPost={() => {}} />
      )
    })
  }

  static post(): HTMLElement {
    return screen.getByText(PostsFixture.aUniqueTitle)
  }

  static clickPost(): void {
    fireEvent.click(SUT.post())
  }
}