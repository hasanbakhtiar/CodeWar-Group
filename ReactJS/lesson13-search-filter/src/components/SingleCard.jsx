import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

const SingleCard = ({ title, photo, price, desc, id }) => {
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
                </Card.Body>
            </Card>
        </Col>
    );
}

export default SingleCard;