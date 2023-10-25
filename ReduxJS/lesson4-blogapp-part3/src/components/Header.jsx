import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
     <Navbar.Brand href='/'>React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <LinkContainer to="/"><Nav.Link >Home</Nav.Link></LinkContainer>
         
        </Nav>
        <LinkContainer to="/dashboard"><Button>Login</Button></LinkContainer>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header