import { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { ProductContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useCart } from 'react-use-cart';

const Header = () => {
  const {totalItems} = useCart();
  const [product] = useContext(ProductContext);
  const [keyword, setKeyword] = useState();
  return (
    <Navbar expand="lg" className="bg-info navbar-dark">
      <Container>
        <LinkContainer to="/"><Navbar.Brand><img width={50} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/1024px-Amazon_icon.svg.png" alt="" /></Navbar.Brand></LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">

            <LinkContainer to="/"><Nav.Link >Home</Nav.Link></LinkContainer>

            <LinkContainer to="/products"><Nav.Link >Products({product.length})</Nav.Link></LinkContainer>

          </Nav>
          <div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Searching...</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                  </div>
                  <div className="modal-body">
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" placeholder="Type to product name" onChange={e => setKeyword(e.target.value)} />
                    </div>

                    <ul className="list-group">
                      {product.filter(i => i.title.toLocaleLowerCase().includes(keyword)).map(i => (

                        <Link to={`/products/${i.id}`} key={i.id} className="list-group-item d-flex justify-content-between align-items-center" >{i.title}<img width={100} src={i.images[0]} alt='err' /></Link>
                      ))}

                    </ul>


                  </div>

                </div>
              </div>
            </div>
          </div>
          <Link to='/cart' type="button" className="btn btn-success ms-3 position-relative">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {totalItems}
            </span>
          </Link>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;