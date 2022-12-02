import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <LinkContainer to="/">
                <Navbar.Brand>React-Learning</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="useState" id="basic-nav-dropdown">
                        <NavDropdown.Item><LinkContainer to="/chapter1-1"><Nav.Link>Chapter 1-1</Nav.Link></LinkContainer></NavDropdown.Item>
                        <NavDropdown.Item><LinkContainer to="/chapter1-2"><Nav.Link>Chapter 1-2</Nav.Link></LinkContainer></NavDropdown.Item>
                        <NavDropdown.Item><LinkContainer to="/chapter1-3"><Nav.Link>Chapter 1-3</Nav.Link></LinkContainer></NavDropdown.Item>
                        <NavDropdown.Item><LinkContainer to="/chapter1-4"><Nav.Link>Chapter 1-4</Nav.Link></LinkContainer></NavDropdown.Item>
                        <NavDropdown.Item><LinkContainer to="/chapter1-5"><Nav.Link>Chapter 1-5</Nav.Link></LinkContainer></NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header