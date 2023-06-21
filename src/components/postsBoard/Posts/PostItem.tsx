import { useEffect, useRef, useState } from "react"
import { Post } from "../../../types/posts"
import "./postItem.css"

interface PostItemProps {
  post: Post
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  const ref = useRef<HTMLTableCellElement>(null)
  const [isOverflowed, setIsOverflowed] = useState<boolean>(false)

  useEffect(() => {
    if (ref.current) {
      const { current } = ref
      const hasOverflow = current.offsetHeight > 80
      setIsOverflowed(hasOverflow)
    }
  }, [post.title])

  const getPostTitle = (): string => {
    let title: string = post.title
    if (isOverflowed) {
      title = post.title.substring(0, 40) + "..."
    }
    return title
  }

  const getPostTooltip = (): string => {
    let title: string = ""
    if (isOverflowed) {
      title = post.title
    }
    return title
  }

  return (
    <div className="card">
      <div className="header">
        <h3 title={getPostTooltip()} ref={ref}>
          {getPostTitle()}
        </h3>
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
