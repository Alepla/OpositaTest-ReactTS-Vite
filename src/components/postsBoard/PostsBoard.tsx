import { useEffect, useState } from "react"
import { Post } from "../../types/posts"
import Posts from "../../services/posts"
import PostItem from "./Posts/PostItem"
import "./postsBoard.css"

const PostsBoard: React.FC = () => {
  const [posts, setPosts] = useState<Array<Post>>([])

  useEffect(() => {
    retrievePosts()
  }, [])

  const retrievePosts = async (): Promise<void> => {
    const postsData = await Posts.retrievePostsData()
    setPosts(postsData.posts)
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