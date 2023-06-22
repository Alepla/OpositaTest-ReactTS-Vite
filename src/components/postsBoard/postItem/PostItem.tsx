import { Post } from "../../../types/posts"
import { useOverflow } from "../../../hooks/useOverflow"
import PostContent from "./postContent/PostContent"
import { useState } from "react"
import "./postItem.css"

interface PostItemProps {
  post: Post
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  const { title, reactions, tags } = post
  const { getPostTitle, getPostTooltip, ref } = useOverflow(title)
  const [modalIsOpen, setIsOpen] = useState(false)

  const handleOpenModal = (): void => {
    setIsOpen(true)
  }

  const handleCloseModal = (): void => {
    setIsOpen(false)
  }

  return (
    <>
      <div className="card" onClick={handleOpenModal}>
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
          <button>Like</button>
        </div>
      </div>
      {modalIsOpen && <PostContent post={post} onCloseModal={handleCloseModal} />}
    </>
  )
}

export default PostItem
