import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const { name, picture, category } = props.service;

    return (
        <div>

            <Col>
                <Card>
                    <div className='ps-4 '>
                        <Card.Img style={{
                            height: '100px',
                            width: '100px'
                        }} variant="top" src={picture} />
                    </div>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {category}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;