import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
     <Navbar.Brand href='/'>React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <LinkContainer to="/"><Nav.Link >Home</Nav.Link></LinkContainer>
         
        </Nav>
        {localStorage.getItem('username')===null?<div>

        <LinkContainer to="/login"><Button>Sign In </Button></LinkContainer>
        <LinkContainer to="/register"><Button variant='warning ms-3'>Sign Up</Button></LinkContainer>
        </div>: <h3>Welcome,{localStorage.getItem('username')}<button className='btn ms-3 btn-danger' onClick={()=>{localStorage.removeItem('username'); navigate('/');}}>Log out</button></h3>}
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header