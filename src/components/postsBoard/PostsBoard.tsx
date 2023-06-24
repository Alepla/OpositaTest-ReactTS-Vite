import { useEffect, useState } from "react"
import { Post } from "../../types/posts"
import Posts from "../../services/posts"
import PostItem from "./postItem/PostItem"
import { moveElementToEnd, moveElementToStart } from "../../helpers/moveArrayElement"
import { EmptyResults, ErrorBoundary, Loader, Pagination } from "../common"
import "./postsBoard.css"
import { POSTS_PER_PAGE } from "../../shared/pagination"

const PostsBoard: React.FC = () => {
  const RESULTS_NAME = "posts"

  const [posts, setPosts] = useState<Array<Post>>([])
  const [total, setTotal] = useState<number>(0)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    retrievePosts()
  }, [])

  const retrievePosts = async (page: number = 0): Promise<void> => {
    setIsLoading(true)
    const result = await Posts.retrievePostsData(page)
    setPosts(result.posts)
    setTotal(result.total)
    setIsLoading(false)
  }

  const handleLikePost = (postId: number): void => {
    const postPosition = posts.findIndex((post) => post.id === postId)

    let updatedPosts: Array<Post> = posts
    updatedPosts[postPosition].liked = !updatedPosts[postPosition].liked

    const isPostLiked: boolean = updatedPosts[postPosition].liked
    if (isPostLiked) updatedPosts = moveElementToStart<Post>(updatedPosts, postPosition)
    if (!isPostLiked) updatedPosts = moveElementToEnd<Post>(updatedPosts, postPosition)

    setPosts([...updatedPosts])
  }

  const hasPosts = (): boolean => {
    return posts.length != 0
  }

  return (
    <div className="posts">
      {isLoading && <Loader />}
      {!hasPosts() && !isLoading && <EmptyResults label={RESULTS_NAME} />}
      {hasPosts() &&
        posts.map((post) => (
          <ErrorBoundary key={post.id}>
            <PostItem post={post} onLikePost={handleLikePost} />
          </ErrorBoundary>
        ))}
      <Pagination postsPerPage={POSTS_PER_PAGE} totalPosts={total} onSelectPage={retrievePosts} />
    </div>
  )
}

export default PostsBoard
