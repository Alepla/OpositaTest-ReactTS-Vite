import { useEffect, useState } from "react"
import { Post } from "../../types/posts"
import Posts from "../../services/posts"
import PostItem from "./postItem/PostItem"
import Pagination from "./pagination/Pagination"
import "./postsBoard.css"

const PostsBoard: React.FC = () => {
  const [posts, setPosts] = useState<Array<Post>>([])
  const [total, setTotal] = useState<number>(0)

  useEffect(() => {
    retrievePosts()
  }, [])

  const retrievePosts = async (page: number = 0): Promise<void> => {
    const result = await Posts.retrievePostsData(page)
    setPosts(result.posts)
    setTotal(result.total)
  }

  const handleAddFavPost = (postId: number): void => {
    const postPosition = posts.findIndex((post) => post.id === postId)
    
    const updatedPosts = posts
    updatedPosts[postPosition].liked = !updatedPosts[postPosition].liked

    setPosts(updatedPosts)
  }

  const hasPosts = (): boolean => {
    return posts.length != 0
  }

  return (
    <div className="posts">
      {hasPosts() && posts.map((post) => <PostItem key={post.id} post={post} onAddFavPost={handleAddFavPost} />)}
      <Pagination postsPerPage={30} totalPosts={total} onSelectPage={retrievePosts} />
    </div>
  )
}

export default PostsBoard
