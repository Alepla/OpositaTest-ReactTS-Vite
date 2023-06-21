export type Post = {
  id: number
  title: string
  body: string
  reactions: number
  userId: number
  tags: Array<string>
}

export type PostsData = {
  limit: number
  skip: number
  total: number
  posts: Array<Post>
}