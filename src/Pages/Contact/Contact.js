import React from 'react';
import Footer from '../Shared/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faClock, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Button, Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <div className='container' >
                <h1 className='text-info'>Contacts</h1>
                <div className='row mt-5'>
                    <div className='col-lg-6 col-sm-12 mb-4'>
                        <FontAwesomeIcon icon={faMapMarkerAlt} className='fs-3 text-info' /><h5>Office Location-</h5>
                        <p>51/C/A,Karana,Uganda <br /><span className='text-secondary'>Our office consists of three buildings and is located in the heart of the city. You can easily reach us by metro or by land transpor</span> </p><br />

                        <FontAwesomeIcon icon={faClock} className='fs-3 text-info' /><h5>Monday to Friday-</h5>
                        <p className='text-secondary'>9:00 AM to 6:00 PM </p>
                        <h5>Saturday-</h5>
                        <p className='text-secondary'>9:00 AM to 6:00 PM </p>
                        <h5>Sunday-</h5>
                        <p className='text-secondary'>Closed </p><br />


                        <FontAwesomeIcon icon={faEnvelope} className='fs-3 text-info' /><h5>Address-</h5>
                        <p className='text-secondary'>51/C/A,Karana,Uganda  </p>
                        <h5>Phone-</h5>
                        <p className='text-secondary'>+570-5468752 </p>
                        <h5>Email</h5>
                        <p className='text-secondary'>sheba@care.com</p>
                        <br />


                    </div>
                    <div className='col-lg-6 col-sm-12'>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="1234 Main St" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>

                    </div>
                </div>

            </div>


            <Footer></Footer>
        </div>
    );
};

export default Contact;