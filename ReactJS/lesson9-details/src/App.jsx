import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Products from "./pages/Products"
import NotFoundPage from "./pages/NotFoundPage"
import Admin from "./admin/Admin"
import Login from "./pages/Login"
import ProductDetails from "./pages/ProductDetails"




const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:url" element={<ProductDetails />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
   <Footer />
    </BrowserRouter>
  )
}

export default App