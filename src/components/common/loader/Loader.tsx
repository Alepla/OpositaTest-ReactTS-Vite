import "./loader.css"

const Loader: React.FC = () => {
  return (
    <div className="loader">
      <div className="visible" aria-label="loader">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Loader
