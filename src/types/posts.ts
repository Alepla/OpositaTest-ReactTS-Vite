export type Post = {
  id: number
  title: string
  body: string
  reactions: number
  userId: number
  liked: boolean
  tags: Array<string>
}

export type PostsData = {
  limit: number
  skip: number
  total: number
  posts: Array<Post>
}

export type Comment = {
  id: number
  body: string
  postId: number
  user: User
}

export type User = {
  id: number
  username: string
}
