import { useEffect, useState } from "react"
import { Post } from "../../types/posts"
import Posts from "../../services/posts"
import PostItem from "./postItem/PostItem"
import Pagination from "./pagination/Pagination"
import { moveElementToEnd, moveElementToStart } from "../../helpers/moveArrayElement"
import Loader from "../common/loader/Loader"
import EmptyResults from "../common/emptyResults/EmptyResults"
import ErrorBoundary from "../common/errorBoundary/ErrorBoundary"
import "./postsBoard.css"

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
      <Pagination postsPerPage={30} totalPosts={total} onSelectPage={retrievePosts} />
    </div>
  )
}

export default PostsBoard
