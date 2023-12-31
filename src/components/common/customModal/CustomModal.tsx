import Modal from "react-modal"
import "./customModal.css"

interface ModalProps {
  title: string
  children: JSX.Element
  onCloseModal: () => void
}

const CustomModal: React.FC<ModalProps> = ({ title, children: body, onCloseModal }) => {
  return (
    <Modal isOpen={true} onRequestClose={onCloseModal} ariaHideApp={false} style={customStyles}>
      <div className="container">
        <div className="header">
          <button className="close" onClick={onCloseModal}>
            X
          </button>
          <h3>{title}</h3>
        </div>
        <div className="body">{body}</div>
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

export default CustomModal
