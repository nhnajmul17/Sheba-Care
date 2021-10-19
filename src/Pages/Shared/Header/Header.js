import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css'
import logo from '../../../Images/logo.png'
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
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
                    <Navbar.Brand as={Link} to="/home" className='fs-3 fw-bold'><span className='text-success'>Sheba</span> <span className='header'>Care</span></Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#features">Features</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                            <NavDropdown title="More" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/departments">Departments</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/doctors">Doctors</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/about">About Us</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/faq">Faq</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/contact">Contact</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            {user?.email && <p className='me-3'>Sign in as: {user?.displayName}</p>}

                            {user?.email ? <button onClick={logOut}>Logout</button> : <Nav.Link as={Link} to="/login"> <button className='btn btn-dark'>Login</button></Nav.Link>}
                            {user?.email ? <p>{' '}</p> : <Nav.Link as={Link} to="/signup"><button className='btn btn-dark'>Signup</button></Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;