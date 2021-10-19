import React from 'react';
import { Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const Faq = () => {
    return (
        <div>
            <div >
                <h1 className=' fw-bold text-info'>Faq</h1>
                <div className='m-5 p-5'>
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Does Sheba Care offer urgent Care?</Accordion.Header>
                            <Accordion.Body>
                                Our primary care providers can address a wide range of urgent and acute concerns. Because we offer same-day appointment availability and 24/7 access to our clinical team, we are a great option for urgent needs. If you have a concern after-hours or are unsure whether you should go straight to an urgent care facility or the nearest emergency room, please call our office to be connected with a member of the Sheba Care team.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Does Sheba Care offer Pediatrics?</Accordion.Header>
                            <Accordion.Body>
                                Sheba Care offers Pediatric Services (newborn-17 years old) in limited offices in the SF Bay Area, New York, Los Angeles, Orange County, Portland, Seattle, Chicago, Boston, Austin and Phoenix. Please call us to find out if we have a Pediatric office located near you. Depending on the age of your child, we may have other care options available to you. Our Family Medicine doctors see patients age 14 and up, and our Internal Medicine doctors see patients age 18 and up.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>What is Sheba Cares Philosophy towards medical care?</Accordion.Header>
                            <Accordion.Body>
                                Sheba Care was founded on a better model of care – one designed around patients’ needs that provides a higher level of quality and service affordably. We do this through innovative design, excellent customer service, and the efficient use of technology.

                                Our entire team believes in building trust-based partnerships with our patients. Rather than simply writing a prescription and sending you on your way, your primary care provider (PCP) will collaborate with you as your long-term health care advocate, help you manage your health issues and navigate complex decisions, and empower you with the knowledge and guidance you need to make positive changes. We use diagnostic tests appropriately, wary of the risk of overdiagnosis, and strive to ensure that follow-up plans are clearly understood.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Have More Questions?</Accordion.Header>
                            <Accordion.Body>
                                <Link to='/contact' className='text-danger' > CONTACT </Link> with is  us or mail us your questions.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>

            </div>


            <Footer></Footer>
        </div>
    );
};

export default Faq;