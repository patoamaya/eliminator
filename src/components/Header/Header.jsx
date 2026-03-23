import "./Header.css"
import logo from '../../assets/eliminator.png'
const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="headerInfo">
        <ul>
          <li>Todo</li>
          <li>Autos</li>
          <li>Suv</li>
          <li>Pick-up</li>
        </ul>
      </div>
    </header>

  )
}

export default Header
