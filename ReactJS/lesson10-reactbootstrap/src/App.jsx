import { Nav } from "react-bootstrap"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Products from "./pages/Products"




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App