import { useEffect, useState } from "react"
import Posts from "../../../../services/posts"
import { Comment, Post } from "../../../../types/posts"
import { CustomModal, EmptyResults, Loader } from "../../../common"
import "./postContent.css"

interface PostContentProps {
  onCloseModal: () => void
  post: Post
  children: JSX.Element
}

const PostContent: React.FC<PostContentProps> = ({ children: likeButton, onCloseModal, post }) => {
  const RESULTS_NAME = "comments"

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
    <CustomModal title={title} onCloseModal={onCloseModal}>
      <div className="content">
        <div className="tags">
          {tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
        <h3>Description</h3>
        <p>{body}</p>
        <div className="comments-container">
          <h3>Comments</h3>
          {isLoading && <Loader />}
          {!hasComments() && !isLoading && <EmptyResults label={RESULTS_NAME} />}
          <div className="comments">
            {hasComments() &&
              comments.map((comment) => (
                <div key={comment.id} className="comment">
                  <p>{comment.body}</p>
                </div>
              ))}
          </div>
        </div>
        <div className="action-buttons">{likeButton}</div>
      </div>
    </CustomModal>
  )
}

export default PostContent
