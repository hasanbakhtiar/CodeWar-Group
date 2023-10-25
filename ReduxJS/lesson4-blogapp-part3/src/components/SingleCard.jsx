import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SingleCard({ title, desc }) {
    return (
        <Col sm={12} md={4}>
            <Card >
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                    <Button variant="primary">Read more</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default SingleCard;