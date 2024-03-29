
import React from 'react'
import { Card, Col,Button } from 'react-bootstrap'

const SingleCard = () => {
    return (
        <Col sm={12} md={4}>
            <Card >
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default SingleCard