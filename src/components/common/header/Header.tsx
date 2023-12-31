import "./header.css"

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="menu-header">
      <div className="items">
        <img className="logo" src={"/logo.png"} alt={"oposita-test"} />

        <h3>{title}</h3>
        <img className="profile" src={"/profile.png"} alt={"profile"} />
      </div>
    </div>
  )
}

export default Header
