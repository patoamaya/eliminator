import { Outlet } from "react-router-dom"
import Footer from "./Footer"
Outlet
const FooterContainer = () => {
  return (
  <div>
    <div>
      <Outlet />
    </div>
    <div>
        <Footer/>
    </div>
  </div>
  )
}

export default FooterContainer