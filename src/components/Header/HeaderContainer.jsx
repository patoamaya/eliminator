import { Outlet } from "react-router-dom"
import Header from "./Header"


const HeaderContainer = () => {
  return (
    <div>
        <Header/>
        <Outlet />
    </div>
  )
}

export default HeaderContainer