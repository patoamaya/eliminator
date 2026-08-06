import Home from './Home'
import vehiculos from '../../db.json'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const HomeContainer = () => {
const [category, setCategory] = useState("")
const {categoria} = useParams()

useEffect(()=>{
  let filtrado = vehiculos.filter((vehiculo)=> vehiculo.tipo === categoria)
  if (categoria && categoria != "all"){
      setCategory(filtrado)
  }else{
    setCategory(vehiculos)
  }
},[categoria])


  return (
    <div><Home category={category}/></div>
  )
}

export default HomeContainer