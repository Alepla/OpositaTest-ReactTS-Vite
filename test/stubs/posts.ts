import { SpyInstance } from "vitest"
import { vi } from "vitest"
import Posts from "../../src/services/posts"
import { PostsFixture } from "../fixtures/posts"

export default class PostsStub {
  static retrievePostsDataSpy: SpyInstance

  static spyRetrievePostsData(): void {
    this.retrievePostsDataSpy = vi
      .spyOn(Posts, "retrievePostsData")
      .mockResolvedValue(PostsFixture.aPostsData)
  }
}