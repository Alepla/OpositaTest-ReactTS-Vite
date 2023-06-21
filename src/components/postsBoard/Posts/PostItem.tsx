import { Post } from "../../../types/posts"
import "./postItem.css"

interface PostItemProps {
  post: Post
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <div className="card">
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
  )
}

export default PostItem