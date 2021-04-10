import
  React,
  { useState, useEffect, useRef }
from 'react'
import Navbar from 'react-bootstrap/Navbar'

import {HeaderItems} from "../components/headerItems"
import '../../styles/components/header.scss'

export default function Header(props) {
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
        <HeaderItems
          loggedInStatus={props.loggedInStatus}
          handleLogout={props.handleLogout}
        />
      </Navbar.Collapse>
    </Navbar>
  )
};