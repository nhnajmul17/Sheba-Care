import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Appointements = () => {
    const { id } = useParams();
    const [item, setItem] = useState([])
    useEffect(() => {
        fetch('/fakedata.json')
            .then(res => res.json())
            .then(data => {
                setItem(data.find(itm => itm._id == id))
            })
    }, [])

    // const exactItem = item.filter(itm => itm._id == id)
    const { user } = useAuth();

    return (
        <div className='p-5'>
            <h1 className='text-info mb-5'> Appointments Form</h1>
            <Form>

                <Row>

                    <Col>
                        <Form.Label> Department</Form.Label>
                        <Form.Control placeholder=" Depatment" defaultValue={item.name} />
                    </Col>
                    <Col>
                        <Form.Label>Doctor's Name </Form.Label>

                        <Form.Control placeholder="Doctor" defaultValue={item.doctor} />
                    </Col>
                </Row>
                <br /><br />
                <Row>

                    <Col>
                        <Form.Label> Doctor's Fee's</Form.Label>
                        <Form.Control placeholder="Doctor's Fee's" defaultValue={item.price} />
                    </Col>
                    <Col>
                        <Form.Label>Doctor's Speciality </Form.Label>

                        <Form.Control placeholder="Doctor" defaultValue={item.speciality} />
                    </Col>
                </Row>


                <br /><br />
                <Row>

                    <Col>
                        <Form.Label> Name</Form.Label>
                        <Form.Control placeholder=" Name" defaultValue={user.displayName} />
                    </Col>
                    <Col>
                        <Form.Label>Age</Form.Label>

                        <Form.Control placeholder="Age" />
                    </Col>
                </Row>
                <br /><br />
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email " defaultValue={user.email} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control type="text" placeholder="Male/Female" />
                    </Form.Group>
                </Row>
                <br />
                <Row className="mb-3">
                    <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" placeholder="Phone Number" />
                    </Form.Group>
                </Row>
                <br /><br />

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Row>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>



        </div>
    );
};

export default Appointements;