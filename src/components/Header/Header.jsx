import './Header.css'
import logo from '../../assets/eliminator.png'
const Header = () => {
  return (
    <header>
      <div className="logo">
        <a href="/"><img src={logo} alt="" /></a>
      </div>
      <nav>
        <ul>
          <li><a href="/category/all">Todos</a></li>
          <li><a href="/category/cars">Autos</a></li>
          <li><a href="/category/suv">Suv</a></li>
          <li><a href="/category/pickup">Pick-up</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header