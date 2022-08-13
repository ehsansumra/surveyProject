import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AppRouter from './AppRouter';
import { Link } from 'react-router-dom';
import './styles/NavBar.css'
const AppNav = () => {
    return (
        <>
            <Navbar collapseOnSelect className="sticky-nav" fixed="top" variant="dark" expand="sm">
                <Container>
                <Navbar.Brand as={Link} to="/">survey</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link as={Link} to="/test">Surveys</Nav.Link>
                        <Nav.Link as={Link} to="/create_survey">Create</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                
                </Container>
                
            </Navbar>
        </>
    )

}

export default AppNav;