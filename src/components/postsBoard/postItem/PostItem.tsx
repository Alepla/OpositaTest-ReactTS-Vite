import { Post } from "../../../types/posts"
import { useOverflow } from "../../../hooks/useOverflow"
import PostContent from "./postContent/PostContent"
import { useState } from "react"
import { Button, ErrorBoundary } from "../../common"
import "./postItem.css"

interface PostItemProps {
  post: Post
  onLikePost: (id: number) => void
}

const PostItem: React.FC<PostItemProps> = ({ post, onLikePost }) => {
  const { title, reactions, tags, liked, id } = post
  const { getClippedTitle, getOverflowTooltip, ref } = useOverflow(title)
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

  const handleOpenModal = (): void => {
    setModalIsOpen(true)
  }

  const handleCloseModal = (): void => {
    setModalIsOpen(false)
  }

  const selectBanner = (): JSX.Element => {
    if (liked) return <label className="like-banner">Liked</label>
    return <></>
  }

  const selectButtonLabel = (): string => {
    const label: string = "Like"
    if (liked) return "Dislike"
    return label
  }

  const handleLikePost = (): void => {
    onLikePost(id)
  }

  return (
    <>
      <div className="card" onClick={handleOpenModal}>
        <div className="header">
          <h3 title={getOverflowTooltip()} ref={ref}>
            {getClippedTitle()}
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
        <div className="footer">{selectBanner()}</div>
      </div>
      {modalIsOpen && (
        <ErrorBoundary>
          <PostContent post={post} onCloseModal={handleCloseModal}>
            <Button onClick={handleLikePost} className="dark" label={selectButtonLabel()} />
          </PostContent>
        </ErrorBoundary>
      )}
    </>
  )
}

export default PostItem
