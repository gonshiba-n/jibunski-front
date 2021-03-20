import
  React,
  { useState, useEffect, useRef }
from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

import Btn from "../components/button"
import '../../styles/components/header.scss'

export default function Header() {

  const [white, setState] = useState("bg-transparent")

  const elm = useRef(0)

  const scrollCheck = () => {
    if ((window.pageYOffset - elm.current.offsetTop) <= 0){
      // Navbarの高さが0の時
      setState("bg-transparent")
    }else{
      // Navbarの高さが0以外の時
      setState("bg")
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      window.addEventListener("scroll", event => scrollCheck())
    }
      handleScroll()
  }, [ setState ])

  return(
    <Navbar ref={ elm } fixed="top" collapseOnSelect expand="md" className={ white } variant="light">
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
          <Link to="/signup" className="text-white">
            <Btn
              size="md"
              variant="primary"
              className="signin m-2"
              nameValue="Signup"
            />
          </Link>
          <Link to="/login" className="text-white">
            <Btn
              size="md"
              variant="primary"
              className="login m-2"
              nameValue="Login"
            />
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
};