import { Post } from "../../../types/posts"
import { useOverflow } from "../../../hooks/useOverflow"
import PostContent from "./postContent/PostContent"
import { useState } from "react"
import "./postItem.css"

interface PostItemProps {
  post: Post
  onAddFavPost: (id: number) => void
}

const PostItem: React.FC<PostItemProps> = ({ post, onAddFavPost }) => {
  const { title, reactions, tags, liked } = post
  const { getPostTitle, getPostTooltip, ref } = useOverflow(title)
  const [modalIsOpen, setIsOpen] = useState(false)

  const handleOpenModal = (): void => {
    setIsOpen(true)
  }

  const handleCloseModal = (): void => {
    setIsOpen(false)
  }

  const isPostLiked = (): JSX.Element => {
    if (liked) return (<label className="like-banner">Me gusta</label>)
    return <></>
  } 

  const handleAddFavPost = (id: number): void => {
    onAddFavPost(id)
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
        <div className="footer">
          {isPostLiked()}
        </div>
      </div>
      {modalIsOpen && <PostContent post={post} onCloseModal={handleCloseModal} onAddFavPost={handleAddFavPost} />}
    </>
  )
}

export default PostItem
