import React,{ useState, useEffect } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from 'react-bootstrap/Form';
import axios from 'axios';

import Btn from "../../../components/button";
import '../../../../styles/layouts/home/auth/formlayout.scss';

export default function Registration() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")

  // 背景追加、フッター隠し
  function ClassNameAdd(){
    const Body = document.getElementById('body')
    const FooterNone = document.getElementById('footer')
    Body.classList.add("body");
    if(FooterNone){
      FooterNone.classList.add("d-none")
    }
  };
  useEffect(() => {
    ClassNameAdd()
  }, [])
  // 背景追加、フッター隠し ここまで

  const root = process.env.REACT_APP_APP_BACKEND_PATH
  const handleSubmit = (event) => {
    axios.post(
      root + "/signup",
      {
      user: {
        name: name,
        email: email,
        password: password,
        password_confirmation: passwordConfirmation
      }
    },
    { withCredentials: true }
        ).then(response => {
      console.log("registration res", response)
    }).catch(error => {
      console.log("error_message error", error)
    })
    console.log("イベント発火")
    event.preventDefault()
  }

  return(
    <Row className="formlayout">
      <Col md={8} className="mx-auto">
        <h2 className="text-white mb-3">Signup</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label className="h3 text-white">User name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter name"
              value={name}
              onChange={event => setName(event.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label className="h3 text-white">Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label className="h3 text-white">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPasswordConfirmation">
            <Form.Label className="h3 text-white">Password Confirmation</Form.Label>
            <Form.Control
              type="passwordConfirmation"
              placeholder="PasswordConfirmation"
              value={passwordConfirmation}
              onChange={event => setPasswordConfirmation(event.target.value)}
            />
            <Form.Text className="text-white">
              確認用パスワード
            </Form.Text>
          </Form.Group>

          {/* <Col className="text-right"> */}
          <Btn
            size="lg"
            variant="primary"
            type="submit"
            className="mt-3 signin"
            nameValue="登録する"
          />
          {/* </Col> */}
        </Form>
      </Col>
    </Row>
  )
}