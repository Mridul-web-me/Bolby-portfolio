import React, { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import ScrollspyNav from "react-scrollspy-nav";
import './Header.css'

const Header = () => {
  return (
   <div className='header' id='section_1'>
                <ScrollspyNav
                    scrollTargetIds={["section_1", "section_2", "section_3", "section_4", 'section_5', 'section_6', 'contact']}
                    activeNavClass="is-active"
                    color="red"
                    scrollDuration= '10'
                >
                    <Navbar expand="lg">
                        <Container>
                            <Navbar.Brand href="#home" id="section_1">Mridul<span className='navbarSpan'>.</span></Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="">
                                <Nav.Link href="#section_1">Home</Nav.Link>
                                <Nav.Link href="#section_2">About</Nav.Link>
                                <Nav.Link href="#section_3">Service</Nav.Link>
                                <Nav.Link href="#section_4">Experience</Nav.Link>
                                <Nav.Link href="#section_5">Works</Nav.Link>
                                <Nav.Link href="#section_6">Blogs</Nav.Link>
                                <Nav.Link href="#contact">Contact</Nav.Link>
                            </Nav>
                            </Navbar.Collapse>
                        </Container>
                        </Navbar>
                </ScrollspyNav>  
   </div>
  )
}

export default Header