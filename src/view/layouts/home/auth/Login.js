import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from 'react-bootstrap/Form';
import axios from 'axios';

import Btn from "../../../components/button";
import '../../../../styles/layouts/home/auth/formlayout.scss';

export default function Registration(props) {

  const { register, errors, handleSubmit, reset, watch } = useForm()
  const Email = watch('email')
  const Password = watch('password')
  const [confirm, setConfirm] = useState("")

  const root = process.env.REACT_APP_APP_BACKEND_PATH
  const onSubmit = (event) => {
    axios.post(
      root + "/login",
      {
        user: {
          email: Email,
          password: Password
        }
      },
      { withCredentials: true }
    ).then(response => {
      if (response.data.status === 'created') {
        props.handleSuccessfulAuthentication(response.data, props)
        console.log(response)
      } else {
        console.log(response)
        setConfirm(response.data.message.email)
      }
    }).catch(error => {
      console.log("error_message error", error)
    })
  }

  return (
    <div className="bg-container">
      <Row className="formlayout">
        <Col md={8} className="mx-auto">
          <h2 className="text-white mb-3">Login</h2>
          {/* Email,Password一致確認はDBサーバーサイドでバリデーションを行う */}
          {<div className='formError text-white'>{confirm}</div>}
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="h3 text-white">Email address</Form.Label>
              {errors.email?.type === 'required' && <div className='formError text-white'>メールアドレスを入力してください</div>}
              {errors.email?.type === 'pattern' && <div className='formError text-white'>メールアドレスとして認識できません</div>}
              <div className="text-white"></div>
              <Form.Control
                name="email"
                type="email"
                placeholder="Emailアドレスを入力してください"
                ref={register({
                  required: true,
                  pattern: /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/
                })}
                onChange={event => setConfirm("")}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label className="h3 text-white">Password</Form.Label>
              {errors.password?.type === "required" && <div className='formError text-white'>パスワードを入力してください</div>}
              {errors.password?.type === "minLength" && <div className='formError text-white'>パスワードは6文字以上で入力してください</div>}
              <div className="text-white"></div>
              <Form.Control
                name="password"
                type="password"
                placeholder="パスワードを入力してください"
                ref={register({
                  required: true,
                  minLength: 6,
                })}
              />
            </Form.Group>

            <Col className="text-right">
              <Btn
                size="lg"
                variant="primary"
                type="submit"
                className="mt-3 signin"
                nameValue="ログイン"
                onClick={reset}
              />
            </Col>
          </Form>
        </Col>
      </Row>
    </div>
  )
}