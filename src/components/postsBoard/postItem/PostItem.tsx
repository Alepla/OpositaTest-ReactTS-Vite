import { Post } from "../../../types/posts"
import { useOverflow } from "../../../hooks/useOverflow"
import PostContent from "./postContent/PostContent"
import { useState } from "react"
import Button from "../../common/button/button"
import "./postItem.css"

interface PostItemProps {
  post: Post
  onLikePost: (id: number) => void
}

const PostItem: React.FC<PostItemProps> = ({ post, onLikePost }) => {
  const { title, reactions, tags, liked, id } = post
  const { getPostTitle, getPostTooltip, ref } = useOverflow(title)
  const [modalIsOpen, setIsOpen] = useState(false)

  const handleOpenModal = (): void => {
    setIsOpen(true)
  }

  const handleCloseModal = (): void => {
    setIsOpen(false)
  }

  const isPostLiked = (): JSX.Element => {
    if (liked) return <label className="like-banner">Me gusta</label>
    return <></>
  }

  const handleLikePost = (): void => {
    onLikePost(id)
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
          <p className="reactions">Reacciones: {reactions}</p>
        </div>
        <div className="footer">{isPostLiked()}</div>
      </div>
      {modalIsOpen && (
        <PostContent post={post} onCloseModal={handleCloseModal}>
          <Button onClick={handleLikePost} className="like-button" label="Añadir a favoritos" />
        </PostContent>
      )}
    </>
  )
}

export default PostItem
