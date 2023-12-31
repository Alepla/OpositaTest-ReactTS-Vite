import { Post, PostsData, Comment } from "../../src/types/posts"

export class PostsFixture {
  private static readonly aSmallNumber: number = 0
  private static readonly aMediumNumber: number = 10
  private static readonly aBiggerNumber: number = 50
  private static readonly aText: string = "a text"
  private static readonly anotherText: string = "another text"

  static readonly aPostTitle: string = this.aText
  static readonly aComment: string = "a comment"

  static readonly aTitle: string = "post title"
  static readonly aUniqueTitle: string = "unique post title"

  static readonly aPageOneButton: string = "pageButton 1"
  static readonly apageFiveButton: string = "pageButton 5"
  static readonly aPageSixButton: string = "pageButton 6"
  static readonly aPageFifteenButton: string = "pageButton 15"

  static aSinglePost: Post = {
    id: this.aSmallNumber,
    title: this.aUniqueTitle,
    body: this.aText,
    reactions: this.aSmallNumber,
    userId: this.aSmallNumber,
    liked: false,
    tags: [this.aText, this.anotherText],
  }

  static aPostsList: Array<Post> = [
    {
      id: this.aSmallNumber,
      title: this.aUniqueTitle,
      body: this.aText,
      reactions: this.aSmallNumber,
      userId: this.aSmallNumber,
      liked: false,
      tags: [this.aText, this.anotherText],
    },
    {
      id: this.aMediumNumber,
      title: this.aTitle,
      body: this.aText,
      reactions: this.aSmallNumber,
      userId: this.aSmallNumber,
      liked: false,
      tags: [this.aText, this.anotherText],
    },
  ]

  static aPostsData: PostsData = {
    limit: this.aMediumNumber,
    skip: this.aSmallNumber,
    total: this.aBiggerNumber,
    posts: this.aPostsList,
  }

  static aListOfComments: Array<Comment> = [
    {
      id: this.aSmallNumber,
      body: this.aComment,
      postId: this.aSmallNumber,
      user: {
        id: this.aSmallNumber,
        username: this.aText,
      },
    },
    {
      id: this.aBiggerNumber,
      body: this.aComment,
      postId: this.aSmallNumber,
      user: {
        id: this.aSmallNumber,
        username: this.aText,
      },
    },
  ]
}
