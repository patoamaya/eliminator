import { useState } from 'react'
import HeaderContainer from '../Header/HeaderContainer'
import logo from '../../assets/eliminator.png'
import './Home.css'
const Home = ({category, outstanding}) =>{
  console.log(outstanding)
return(
  <div className="home-container">
    <nav>
    <div className="logo">
      <a href="/"><img src={logo} alt="" /></a>
    </div>
    <HeaderContainer/>
    </nav>
    <main>
      {/* <h1>Car Collection</h1> */}
    </main>
    {/* <div className="home-info">
      { category?.length > 0 &&
        category.map((vehiculo)=>
        <h1>{vehiculo.marca}</h1>
        )
      }
    </div> */}
  </div>
  )
  
  
}

export default Home    