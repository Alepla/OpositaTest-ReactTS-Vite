import { useEffect, useState } from "react"
import { Post } from "../../types/posts"
import Posts from "../../services/posts"
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
      {hasPosts() &&
        posts.map((post) => (
          <div key={post.id} className="card">
            <div className="header">
              <h3>{post.title}</h3>
            </div>
            <div className="body">
              <div className="tags">
                {post.tags.map((tag) => (
                  <span key={tag}>#{tag}</span>
                ))}
              </div>
            </div>
            <div className="footer">
              <p>Reacciones: {post.reactions}</p>
              <input className="star" type="checkbox" />
            </div>
          </div>
        ))}
    </div>
  )
}

export default PostsBoard
