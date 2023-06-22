import { useEffect, useState } from "react"
import { Post } from "../../types/posts"
import Posts from "../../services/posts"
import PostItem from "./postItem/PostItem"
import "./postsBoard.css"

const PostsBoard: React.FC = () => {
  const [posts, setPosts] = useState<Array<Post>>([])

  useEffect(() => {
    retrievePosts()
  }, [])

  const retrievePosts = async (): Promise<void> => {
    const result = await Posts.retrievePostsData()
    setPosts(result.posts)
  }

  const hasPosts = (): boolean => {
    return posts.length != 0
  }

  return (
    <div className="posts">
      {hasPosts() && posts.map((post) => <PostItem key={post.id} post={post} />)}
    </div>
  )
}

export default PostsBoard
