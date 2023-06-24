import "./header.css"

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="menu-header">
      <div className="items">
        <div className="logo-container">
          <img className="logo" src={"/logo.png"} alt={"oposita-test"} />
        </div>
        <h3>{title}</h3>
      </div>
    </div>
  )
}

export default Header
