import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { name, picture, category, _id } = props.service;

    return (
        <div>

            <Col>
                <div className='card'>

                    <Card>
                        <div className='ps-4 img '>
                            <Card.Img style={{
                                height: '100px',
                                width: '100px'
                            }} variant="top" src={picture} />
                        </div>
                        <Card.Body>
                            <Card.Title className='text-secondary'>Department of {name}</Card.Title>
                            <Card.Text> Service Type: {category} </Card.Text>

                            <Link to={`/details/${_id}`}>
                                <Button variant="primary">Get Details</Button>
                            </Link>


                        </Card.Body>
                    </Card>
                </div>

            </Col>
        </div>
    );
};

export default Service;