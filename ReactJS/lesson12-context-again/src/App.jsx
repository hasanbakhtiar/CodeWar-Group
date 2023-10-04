import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import { DataProvider } from './context/DataContext'

const App = () => {
    return (
        <BrowserRouter>
            <DataProvider>
                <Header />
                <Container>
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/products' element={<Products />}></Route>
                    </Routes>
                </Container>
            </DataProvider>
        </BrowserRouter>
    )
}

export default App