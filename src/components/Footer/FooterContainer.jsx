import { Outlet } from "react-router-dom"
import Footer from "./Footer"
Outlet
const FooterContainer = () => {
  return (
    <div>
        <Outlet />
        <Footer/>
    </div>
  )
}

export default FooterContainer