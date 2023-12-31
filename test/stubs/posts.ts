import { SpyInstance } from "vitest"
import { vi } from "vitest"
import Posts from "../../src/services/posts"
import { PostsFixture } from "../fixtures/posts"

export default class PostsStub {
  static retrievePostsDataSpy: SpyInstance
  static retrieveCommentsSpy: SpyInstance

  static spyRetrievePostsData(): void {
    this.retrievePostsDataSpy = vi
      .spyOn(Posts, "retrievePostsData")
      .mockResolvedValue(PostsFixture.aPostsData)
  }

  static spyRetrieveComments(): void {
    this.retrieveCommentsSpy = vi
      .spyOn(Posts, "retrievePostComments")
      .mockResolvedValue(PostsFixture.aListOfComments)
  }
}
