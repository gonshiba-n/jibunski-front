import React from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import Button from 'react-bootstrap/Button';

export const Logout = (props) => {
  const root = process.env.REACT_APP_APP_BACKEND_PATH
  const history = useHistory();

  const handleLogoutClick = () => {
    axios.delete(root + "/logout", { withCredentials: true })
      .then(response => {
        props.handleLogout()
        history.push("/")
      }).catch(error => console.log("ログインエラー", error))
  }
  return(
    <Button
      size={props.size}
      type={props.type}
      variant={props.variant}
      className={props.className}
      onClick={handleLogoutClick}
    >
      {props.nameValue}
    </Button>
  )
}
