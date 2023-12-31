import React from "react"
import { Mock, vi } from "vitest"
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

  it("show a list of comments", async () => {
    await SUT.render()

    expect(SUT.comments()).toHaveLength(2)
  })
})

class SUT {
  static eventSpy: Mock<any, any> = vi.fn()
  static async render() {
    await act(async () => {
      render(
        <PostContent post={PostsFixture.aPostsList[0]} onCloseModal={this.eventSpy}>
          <></>
        </PostContent>
      )
    })
  }

  static post(): HTMLElement {
    return screen.getByText(PostsFixture.aUniqueTitle)
  }

  static clickPost(): void {
    fireEvent.click(SUT.post())
  }

  static comments(): Array<HTMLElement> {
    return screen.getAllByText(/a comment/)
  }
}
