import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'

import UseState1 from '../tutorial/1-useState/setup/1-error-example'
import UseState2 from '../tutorial/1-useState/setup/2-useState-basics'
import UseState3 from '../tutorial/1-useState/setup/3-useState-array'
import UseState4 from '../tutorial/1-useState/setup/4-useState-object'
import UseState5 from '../tutorial/1-useState/setup/5-useState-counter'

import UseEffect1 from '../tutorial/2-useEffect/setup/1-useEffect-basics'
import UseEffect2 from '../tutorial/2-useEffect/setup/2-useEffect-cleanup'
import UseEffect3 from '../tutorial/2-useEffect/setup/3-useEffect-fetch-data'

import Conditional1 from '../tutorial/3-conditional-rendering/setup/1-multiple-returns'
import Conditional2 from '../tutorial/3-conditional-rendering/setup/2-short-circuit'
import Conditional3 from '../tutorial/3-conditional-rendering/setup/3-show-hide'

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

                        {/* Chapter 1: useState */}
                        <NavDropdown title="useState" id="basic-nav-dropdown">
                            <LinkContainer to="/chapter1-1"><NavDropdown.Item>Chapter 1-1</NavDropdown.Item></LinkContainer>
                            <LinkContainer to="/chapter1-2"><NavDropdown.Item>Chapter 1-2</NavDropdown.Item></LinkContainer>
                            <LinkContainer to="/chapter1-3"><NavDropdown.Item>Chapter 1-3</NavDropdown.Item></LinkContainer>
                            <LinkContainer to="/chapter1-4"><NavDropdown.Item>Chapter 1-4</NavDropdown.Item></LinkContainer>
                            <LinkContainer to="/chapter1-5"><NavDropdown.Item>Chapter 1-5</NavDropdown.Item></LinkContainer>
                        </NavDropdown>

                        {/* Chapter 2: useEffect */}
                        <NavDropdown title="useEffect" id="basic-nav-dropdown">
                            <LinkContainer to="/chapter2-1"><NavDropdown.Item>Chapter 2-1</NavDropdown.Item></LinkContainer>
                            <LinkContainer to="/chapter2-2"><NavDropdown.Item>Chapter 2-2</NavDropdown.Item></LinkContainer>
                            <LinkContainer to="/chapter2-3"><NavDropdown.Item>Chapter 2-3</NavDropdown.Item></LinkContainer>
                        </NavDropdown>

                        {/* Chapter 3: conditional Rendering */}
                        <NavDropdown title="Conditional" id="basic-nav-dropdown">
                            <LinkContainer to="/chapter3-1"><NavDropdown.Item>Chapter 3-1</NavDropdown.Item></LinkContainer>
                            <LinkContainer to="/chapter3-2"><NavDropdown.Item>Chapter 3-2</NavDropdown.Item></LinkContainer>
                            <LinkContainer to="/chapter3-3"><NavDropdown.Item>Chapter 3-3</NavDropdown.Item></LinkContainer>
                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Routes>

                <Route exact path="/" element={<Home />} />

                {/* Chapter 1: useState */}
                <Route exact path="/chapter1-1" element={<UseState1 />} />
                <Route exact path="/chapter1-2" element={<UseState2 />} />
                <Route exact path="/chapter1-3" element={<UseState3 />} />
                <Route exact path="/chapter1-4" element={<UseState4 />} />
                <Route exact path="/chapter1-5" element={<UseState5 />} />

                {/* Chapter 2: useEffect */}
                <Route exact path="/chapter2-1" element={<UseEffect1 />} />
                <Route exact path="/chapter2-2" element={<UseEffect2 />} />
                <Route exact path="/chapter2-3" element={<UseEffect3 />} />

                {/* Chapter 3: conditional Rendering */}
                <Route exact path="/chapter3-1" element={<Conditional1 />} />
                <Route exact path="/chapter3-2" element={<Conditional2 />} />
                <Route exact path="/chapter3-3" element={<Conditional3 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Header