import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../../Images/logo.png'
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
                <Container>
                    <Navbar.Brand as={Link} to="/home">
                        <img
                            alt=""
                            src={logo}
                            width="100"
                            height="70"
                            className="d-inline-block align-top"
                        />{' '}

                    </Navbar.Brand>
                    <Navbar.Brand as={Link} to="/home" className='fs-3'><span className='text-success'>Sheba</span> <span className='text-danger'>Care</span></Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#Features">Features</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#Services">Services</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;