import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Doctor = (props) => {
    const { doctor, speciality, name, picture, _id } = props.doctor;
    return (
        <div>
            <Col>
                <Card className='container h-75'>
                    <div className='row'>
                        <div className='col-lg-6 col-sm-12'>
                            <Card.Img className='h-100 w-100 ' variant="top" src={picture} />
                        </div>
                        <div className='col-lg-6 col-sm-12 p-5' >
                            <Card.Body>
                                <Card.Title>{doctor}</Card.Title>
                                <Card.Text>Speciality: {speciality} </Card.Text>
                                <Card.Text>Department: {name} </Card.Text>
                                <Card.Link style={{ textDecoration: 'none' }} className='fw-bold text-info' as={Link} to={`/appointment/${_id}`}> Get Appointment</Card.Link>
                            </Card.Body>
                        </div>
                    </div>

                </Card>
            </Col>
        </div>
    );
};

export default Doctor;