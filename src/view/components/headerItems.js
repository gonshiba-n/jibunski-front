import React from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'


import Btn from "./button"

export const HeaderItems = (props) => {
  const root = process.env.REACT_APP_APP_BACKEND_PATH
  const history = useHistory();

  const handleLogoutClick = () => {
    axios.delete(root + "/logout", { withCredentials: true })
      .then(response => {
        props.handleLogout()
        history.push("/")
      }).catch(error => console.log("ログインエラー", error))
  }

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
      <Nav className="ml-auto mr-4">
        <Dropdown className="user">
          <OverlayTrigger
            key="bottom"
            placement="bottom"
            overlay={
            <Tooltip id={`tooltip-bottom`}>
              ユーザー情報
            </Tooltip>
            }
            >
            <Dropdown.Toggle id="dropdown-basic">
              <i className="far fa-user-circle fa-2x"></i>
            </Dropdown.Toggle>
          </OverlayTrigger>

          <Dropdown.Menu className="dropdown-items">
            <Dropdown.Item href="#/action-1">
              <i class="fas fa-user mr-2"></i>
              {props.user.name}
            </Dropdown.Item>
            <Dropdown.Item onClick={handleLogoutClick}>
              <i class="fas fa-sign-out-alt mr-2"></i>
              Logout
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    )
  }
}