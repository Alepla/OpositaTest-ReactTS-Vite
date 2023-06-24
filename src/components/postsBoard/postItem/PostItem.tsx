import { Post } from "../../../types/posts"
import { useOverflow } from "../../../hooks/useOverflow"
import PostContent from "./postContent/PostContent"
import { useState } from "react"
import Button from "../../common/button/button"
import ErrorBoundary from "../../common/errorBoundary/ErrorBoundary"
import "./postItem.css"

interface PostItemProps {
  post: Post
  onLikePost: (id: number) => void
}

const PostItem: React.FC<PostItemProps> = ({ post, onLikePost }) => {
  const { title, reactions, tags, liked, id } = post
  const { getPostTitle, getPostTooltip, ref } = useOverflow(title)
  const [modalIsOpen, setIsOpen] = useState<boolean>(false)

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
          <p className="reactions">Reactions: {reactions}</p>
          <div className="tags">
            {tags.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>
        </div>
        <div className="footer">{isPostLiked()}</div>
      </div>
      {modalIsOpen && (
        <ErrorBoundary>
          <PostContent post={post} onCloseModal={handleCloseModal}>
            <Button onClick={handleLikePost} className="dark" label="Like" />
          </PostContent>
        </ErrorBoundary>
      )}
    </>
  )
}

export default PostItem
