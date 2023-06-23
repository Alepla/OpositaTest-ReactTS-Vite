import { useEffect, useState } from "react"
import Modal from "react-modal"
import Posts from "../../../../services/posts"
import { Comment, Post } from "../../../../types/posts"

interface PostContentProps {
  onCloseModal: () => void
  onAddFavPost: (id: number) => void
  post: Post
}

const PostContent: React.FC<PostContentProps> = ({ onCloseModal, onAddFavPost, post }) => {
  const { id, title, body, tags } = post
  const [comments, setComments] = useState<Array<Comment>>([])

  useEffect(() => {
    retrieveComments()
  }, [])

  const retrieveComments = async (): Promise<void> => {
    const result = await Posts.retrievePostComments(id)
    setComments(result)
  }

  const hasComments = (): boolean => {
    return comments.length != 0
  }

  const handleAddFavPost = (): void => {
    onAddFavPost(id)
  }

  return (
    <Modal isOpen={true} onRequestClose={onCloseModal} ariaHideApp={false} style={customStyles}>
      <button onClick={onCloseModal}>close</button>
      <div className="header">
        <h3>{title}</h3>
      </div>
      <div className="body">
        <p>{body}</p>
        <div className="tags">
          {tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
        <div className="comments">
          <h3>Comentarios</h3>
          {hasComments() && comments.map((comment) => <p key={comment.id}>{comment.body}</p>)}
        </div>
      </div>
      <div className="footer">
            <button onClick={handleAddFavPost}>Añadir a favoritos</button>
      </div>
    </Modal>
  )
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
}

export default PostContent