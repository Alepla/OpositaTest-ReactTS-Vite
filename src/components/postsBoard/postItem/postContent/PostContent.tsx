import { useEffect, useState } from "react"
import Modal from "react-modal"
import Posts from "../../../../services/posts"
import { Comment, Post } from "../../../../types/posts"
import EmptyResults from "../../../common/emptyResults/EmptyResults"
import Loader from "../../../common/loader/Loader"
import "./postContent.css"

interface PostContentProps {
  onCloseModal: () => void
  post: Post
  children: JSX.Element
}

const PostContent: React.FC<PostContentProps> = ({ children: likeButton, onCloseModal, post }) => {
  const RESULTS_NAME = "comentarios"

  const { id, title, body, tags } = post
  const [comments, setComments] = useState<Array<Comment>>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    retrieveComments()
  }, [])

  const retrieveComments = async (): Promise<void> => {
    setIsLoading(true)
    const result = await Posts.retrievePostComments(id)
    setComments(result)
    setIsLoading(false)
  }

  const hasComments = (): boolean => {
    return comments.length != 0
  }

  return (
    <Modal isOpen={true} onRequestClose={onCloseModal} ariaHideApp={false} style={customStyles}>
      <div className="content">
        <div className="header">
          <button onClick={onCloseModal}>X</button>
          <h3>{title}</h3>
        </div>
        <div className="body">
          <div className="tags">
            {tags.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>
          <p>{body}</p>
          <div className="comments">
            <h3>Comentarios</h3>
            {isLoading && <Loader />}
            {!hasComments() && !isLoading && <EmptyResults label={RESULTS_NAME} />}
            {hasComments() &&
              comments.map((comment) => (
                <div key={comment.id} className="comment">
                  <p>{comment.body}</p>
                </div>
              ))}
          </div>
        </div>
        <div className="footer">{likeButton}</div>
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
    padding: "0",
  },
}

export default PostContent
