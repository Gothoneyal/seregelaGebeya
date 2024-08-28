import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./componenets/Navbar"
import Footer from "./componenets/Footer"
import Home from "./pages/Home"
function App() {

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
