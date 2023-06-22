import Settings from "../infraestructure/settings"
import SuperFetch, { JSONRecord } from "../infraestructure/superFetch"
import { emptyPost } from "../shared/posts"
import { Comment, Post, PostsData, User } from "../types/posts"

export default class Posts {
  static async retrievePostsData(): Promise<PostsData> {
    const endpoint: string = Settings.apiUrl() + "posts"
    let result: PostsData

    try {
      const response: JSONRecord = await SuperFetch.get(endpoint)
      result = this.convertToPostsData(response)
    } catch {
      result = emptyPost
    }

    return result
  }

  static async retrievePostComments(postId: number): Promise<Array<Comment>> {
    const endpoint: string = Settings.apiUrl() + `posts/${postId}/comments`
    let result: Array<Comment>

    try {
      const response: JSONRecord = await SuperFetch.get(endpoint)
      result = this.convertToComment(response)
    } catch {
      result = []
    }

    return result
  }

  private static convertToPostsData(response: JSONRecord): PostsData {
    const posts = response.posts as Array<JSONRecord>
    return {
      limit: Number(response.limit),
      skip: Number(response.skip),
      total: Number(response.total),
      posts: posts.map((post) => this.convertToPost(post)),
    }
  }

  private static convertToPost(post: JSONRecord): Post {
    const tags = post.tags as Array<string>
    return {
      id: Number(post.id),
      title: String(post.title),
      body: String(post.body),
      reactions: Number(post.reactions),
      userId: Number(post.userId),
      tags: tags.map((tag) => String(tag)),
    }
  }

  private static convertToComment(response: JSONRecord): Array<Comment> {
    const comments = response.comments as Array<JSONRecord>
    return comments.map((comment) => {
      return {
        id: Number(comment.id),
        body: String(comment.body),
        postId: Number(comment.postId),
        user: {
          id: (comment.user as User).id,
          username: (comment.user as User).username,
        },
      }
    })
  }
}
