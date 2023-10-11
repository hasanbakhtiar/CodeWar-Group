import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';
import { useCart } from 'react-use-cart';

const SingleCard = ({ title, photo, price, alldata, id }) => {
    const { addItem } = useCart();
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
                    <Button variant='success' onClick={()=>{addItem(alldata)}} className='ms-3'>Add to cart</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default SingleCard;