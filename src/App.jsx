import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomeContainer from './components/Home/HomeContainer'
import DetailContainer from './components/Detail/DetailContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import FooterContainer from './components/Footer/FooterContainer'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<HeaderContainer/>}>
          <Route element={<FooterContainer/>}>
          <Route path="/" element={<HomeContainer/>} />
          <Route path="/detail/id?" element={<DetailContainer/>} />
          </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
