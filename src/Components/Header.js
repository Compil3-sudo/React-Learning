import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Chapter1 from '../tutorial/1-useState/setup/1-error-example'
import Chapter2 from '../tutorial/1-useState/setup/2-useState-basics'
import Chapter3 from '../tutorial/1-useState/setup/3-useState-array'
import Chapter4 from '../tutorial/1-useState/setup/4-useState-object'
import Chapter5 from '../tutorial/1-useState/setup/5-useState-counter'

const Header = () => {
    return (
        <BrowserRouter>
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
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/chapter1-1" element={<Chapter1 />} />
                <Route exact path="/chapter1-2" element={<Chapter2 />} />
                <Route exact path="/chapter1-3" element={<Chapter3 />} />
                <Route exact path="/chapter1-4" element={<Chapter4 />} />
                <Route exact path="/chapter1-5" element={<Chapter5 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Header