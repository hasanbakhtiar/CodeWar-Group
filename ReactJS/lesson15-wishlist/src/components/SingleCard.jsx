import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';
import { useCart } from 'react-use-cart';

import { ToastContainer, toast } from 'react-toastify';

import { useWishlist } from 'react-use-wishlist';


const SingleCard = ({ title, photo, price, alldata, id }) => {
    const { addItem } = useCart();
    const { addWishlistItem } = useWishlist();
   const notify = ()=> toast.success(`${title} added!`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });

        const notifyw = ()=> toast.warning(`${title} wish added!`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    return (
        <Col sm={6} md={4}>
            <Card >
                <Card.Img height={300} variant="top" src={photo} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {price}$
                    </Card.Text>
                    <LinkContainer to={`/products/${id}`}><Button variant="primary">Read more</Button></LinkContainer>
                    <Button variant='success' onClick={()=>{notify(addItem(alldata))}} className='ms-3'>Add to cart</Button>
                    <Button variant='warning' onClick={()=>{notifyw(addWishlistItem(alldata))}} className='ms-3'>Wishlist</Button>

                    <ToastContainer
                        position="bottom-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="colored"
                    />
                </Card.Body>
            </Card>
        </Col>
    );
}

export default SingleCard;