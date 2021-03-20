import React,{ useEffect } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from 'react-bootstrap/Form'

import Btn from "../../../components/button";
import '../../../../styles/layouts/home/auth/formlayout.scss';



export default function Registration() {

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

  return(
    <Row className="formlayout">
      <Col md={8} className="mx-auto">
        <h2 className="text-white mb-3">Signup</h2>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="h3 text-white">Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label className="h3 text-white">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label className="h3 text-white">Password Confirmation</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            <Form.Text className="text-white">
              確認用パスワード
            </Form.Text>
          </Form.Group>

          <Col className="text-right">
          <Btn
            size="lg"
            variant="primary"
            type="submit"
            className="mt-3 signin"
            nameValue="登録する"
          />
          </Col>
        </Form>
      </Col>
    </Row>
  )
}