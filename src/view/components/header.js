import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

import '../../styles/layouts/home/home.scss'

export const Header = () => {
  return(
    <Navbar fixed="top" collapseOnSelect expand="md" bg="light" variant="light">
      <Navbar.Brand href="/">
        <img
          src={`${process.env.PUBLIC_URL}/logo.svg`}
          width="120"
          height="45"
          className="d-inline-block align-top"
          alt="logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto mr-5">
          <Button size="sm" variant="primary" className="signin m-2">
            <Nav.Link href="#features" className="text-white">Signup</Nav.Link>
          </Button>
          <Button size="sm" variant="primary" className="login m-2">
            <Nav.Link href="#pricing" className="text-white">Login</Nav.Link>
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
};