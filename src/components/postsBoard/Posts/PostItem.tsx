import { Post } from "../../../types/posts"
import { useOverflow } from "../../../hooks/useOverflow"
import "./postItem.css"

interface PostItemProps {
  post: Post
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  const { title, reactions, tags } = post
  const { getPostTitle, getPostTooltip, ref } = useOverflow(title)

  return (
    <div className="card">
      <div className="header">
        <h3 title={getPostTooltip()} ref={ref}>
          {getPostTitle()}
        </h3>
      </div>
      <div className="body">
        <div className="tags">
          {tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
      </div>
      <div className="footer">
        <p>Reacciones: {reactions}</p>
        <input className="star" type="checkbox" />
      </div>
    </div>
  )
}

export default PostItem
