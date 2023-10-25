import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import AddBlog from './pages/admin/update/AddBlog'
import Dashboard from './pages/admin/Dashboard'
import EditBlog from './pages/admin/update/EditBlog'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/dashboard/addblog' element={<AddBlog />}></Route>
          <Route path='/dashboard/edit/:id' element={<EditBlog />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App