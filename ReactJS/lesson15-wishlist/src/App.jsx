import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import { ProductProvider } from './context/ProductContext'
import ProductDetails from './pages/ProductDetails'
import { CartProvider } from 'react-use-cart'
import Cart from './pages/Cart'
import { WishlistProvider } from 'react-use-wishlist'
import Wishlist from './pages/Wishlist'
import { ModeContext, ModeProvider } from './context/ModeContext'
import { LangProvider } from './context/LangContext'


const Main = () => {
    const [mode] = useContext(ModeContext);
    return (
        <div className={mode}>
            <WishlistProvider>
                <CartProvider>
                    <ProductProvider>
                        <Header />
                        <Container>
                            <Routes>
                                <Route path='/' element={<Home />}></Route>
                                <Route path='/cart' element={<Cart />}></Route>
                                <Route path='/wishlist' element={<Wishlist />}></Route>
                                <Route path='/products' element={<Products />}></Route>
                                <Route path='/products/:url' element={<ProductDetails />}></Route>
                            </Routes>
                        </Container>
                    </ProductProvider>
                </CartProvider>
            </WishlistProvider>
        </div>
    )
}

const App = () => {
    return (
        <BrowserRouter>
            <LangProvider>
                <ModeProvider>
                    <Main />
                </ModeProvider>
            </LangProvider>
        </BrowserRouter>
    )
}

export default App