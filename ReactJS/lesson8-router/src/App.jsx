import { BrowserRouter, Link, Route, Routes } from "react-router-dom"

const Nav = ()=>{
    return(
        <ol>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ol>
    )
}




const Home =()=>{
    return(
        <h1>Home page</h1>
    )
}


const About =()=>{
    return(
        <h1>About page</h1>
    )
}

const Contact =()=>{
    return(
        <>
        <h1>Contact page</h1>

        </>
    )
}


const App = () => {
  return (
    <BrowserRouter>
    <Nav/>  
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
            </Routes>
    </BrowserRouter>
  )
}

export default App