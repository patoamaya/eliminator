import Home from './Home'
import vehiculos from '../../db.json'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const HomeContainer = () => {
const [category, setCategory] = useState([])
const [outstanding, setOutstanding] = useState([])
const {categoria} = useParams()

useEffect(()=>{
  let filtrado = vehiculos.filter((vehiculo)=> vehiculo.tipo === categoria)
  if (categoria && categoria != "all"){
      setCategory(filtrado)
  }else{
    setCategory(vehiculos)

  }
  
  let destacados = vehiculos?.filter((vehiculo)=>
    vehiculo.destacado === true
  )
  setOutstanding(destacados)
  // console.log(outstanding)
},[categoria])
// console.log(outstanding)

  return (
    <div><Home category={category} outstanding={outstanding}/></div>
  )
}

export default HomeContainer