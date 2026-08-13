import './Header.css'
const Header = () => {
  return (
    <header>
      <div className="logo">
        {/* <a href="/"><img src={logo} alt="" /></a> */}
      </div>
      <nav>
        <ul>
          <li><a href="/auto">Autos</a></li>
          <li><a href="/suv">Suv</a></li>
          <li><a href="/pickup">Pick-up</a></li>
          <li><a href="/all"><button>Todos</button></a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header