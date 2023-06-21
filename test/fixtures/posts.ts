import { Post, PostsData } from "../../src/types/posts"

export class PostsFixture {
  private static readonly aSmallNumber: number = 0
  private static readonly aMediumNumber: number = 10
  private static readonly aBiggerNumber: number = 50
  private static readonly aText: string = "a text"
  private static readonly anotherText: string = "another text"

  static readonly aPostTitle: string = this.aText

  static posts: Array<Post> = [
    {
      id: this.aSmallNumber,
      title: this.aText,
      body: this.aText,
      reactions: this.aSmallNumber,
      userId: this.aSmallNumber,
      tags: [this.aText, this.anotherText],
    },
    {
      id: this.aMediumNumber,
      title: this.aText,
      body: this.aText,
      reactions: this.aSmallNumber,
      userId: this.aSmallNumber,
      tags: [this.aText, this.anotherText],
    },
  ]

  static aPostsData: PostsData = {
    limit: this.aMediumNumber,
    skip: this.aSmallNumber,
    total: this.aBiggerNumber,
    posts: this.posts,
  }
}