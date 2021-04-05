import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

import Btn from "./button"
import { Logout } from "./logout"

export const HeaderItems = (props) => {
  if(!props.loggedInStatus){
    return(
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
    )
  }else{
    return(
      <Nav className="ml-auto mr-5">
        <Logout
          size="md"
          variant="primary"
          className="login m-2"
          nameValue="Logout"
          handleLogout={props.handleLogout}
        />
      </Nav>
    )
  }
}