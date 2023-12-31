import { useEffect, useState } from "react"
import { Post } from "../../types/posts"
import Posts from "../../services/posts"
import PostItem from "./postItem/PostItem"
import { moveElementsToStart } from "../../helpers/moveElementsToStart"
import { EmptyResults, ErrorBoundary, Loader, Pagination } from "../common"
import { POSTS_PER_PAGE } from "../../shared/pagination"
import "./postsBoard.css"

const PostsBoard: React.FC = () => {
  const RESULTS_NAME = "posts"

  const [posts, setPosts] = useState<Array<Post>>([])
  const [totalPosts, setTotalPosts] = useState<number>(0)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    retrievePosts()
  }, [])

  const retrievePosts = async (page: number = 0): Promise<void> => {
    setIsLoading(true)
    const { posts, total } = await Posts.retrievePostsData(page)
    setPosts(posts)
    setTotalPosts(total)
    setIsLoading(false)
  }

  const handleLikePost = (postId: number): void => {
    const postPosition = posts.findIndex((post) => post.id === postId)

    const updatedPosts: Array<Post> = [...posts]
    updatedPosts[postPosition].liked = !updatedPosts[postPosition].liked

    const postsSorted = moveElementsToStart<Post, "liked">(updatedPosts, "liked")
    setPosts(postsSorted)
  }

  const hasPosts = (): boolean => {
    return totalPosts != 0
  }

  return (
    <div className="posts">
      {isLoading && <Loader />}
      {!hasPosts() && !isLoading && <EmptyResults label={RESULTS_NAME} />}
      {hasPosts() && (
        <>
          <ErrorBoundary>
            <>
              {posts.map((post) => (
                <PostItem key={post.id} post={post} onLikePost={handleLikePost} />
              ))}
            </>
          </ErrorBoundary>
          <Pagination
            postsPerPage={POSTS_PER_PAGE}
            totalPosts={totalPosts}
            onSelectPage={retrievePosts}
          />
        </>
      )}
    </div>
  )
}

export default PostsBoard
