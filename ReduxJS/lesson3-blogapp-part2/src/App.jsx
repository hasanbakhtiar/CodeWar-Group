import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import BlogForm from './components/BlogForm'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/addblog' element={<BlogForm />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App