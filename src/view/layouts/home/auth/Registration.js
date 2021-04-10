import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from 'react-bootstrap/Form';
import axios from 'axios';

import Btn from "../../../components/button";
import '../../../../styles/layouts/home/auth/formlayout.scss';

export default function Registration(props) {

  const { register, errors, handleSubmit, reset, watch} = useForm()
  const Name = watch('name')
  const Email = watch('email')
  const Password = watch('password')
  const PasswordConfirmation = watch('passwordConfirmation')
  const [EmailUnique, setEmailUniqe] = useState("")
  const history = useHistory();

  const root = process.env.REACT_APP_APP_BACKEND_PATH
  const onSubmit = (event) => {
    axios.post(
      root + "/signup",
      {
      user: {
        name: Name,
        email: Email,
        password: Password,
        password_confirmation: PasswordConfirmation
      }
    },
    { withCredentials: true }
        ).then(response => {
      if(response.data.status === 'created'){
        props.handleSuccessfulAuthentication(response.data, props)
      }else{
        console.log(response)
        setEmailUniqe(response.data.message.email)
      }
    }).catch(error => {
      console.log("error_message error", error)
      history.push("/500")
    })
  }

  return(
    <div className="bg-container">
    <Row className="formlayout">
      <Col md={8} className="mx-auto">
        <h2 className="text-white mb-3">Signup</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="formBasicName">
            <Form.Label className="h3 text-white">User name</Form.Label>
            {errors.name?.type === 'required' && <div className='formError text-white'>名前を入力してください</div>}
            {errors.name?.type ===  'maxLength' && <div className='formError text-white'>30文字以下で名前を入力してください</div>}
            <div className="text-white"></div>
            <Form.Control
              name="name"
              type="name"
              placeholder="ユーザー名を入力してください"
              ref={register({
                required: true,
                maxLength: 30
              })}
              />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            {/* ユニークはDBサーバーサイドでバリデーションを行う */}
            <Form.Label className="h3 text-white">Email address</Form.Label>
            {errors.email?.type === 'required' && <div className='formError text-white'>メールアドレスを入力してください</div>}
            {errors.email?.type === 'pattern' && <div className='formError text-white'>メールアドレスとして認識できません</div>}
            {<div className='formError text-white'>{ EmailUnique }</div>}
            <div className="text-white"></div>
            <Form.Control
              name="email"
              type="email"
              placeholder="Emailアドレスを入力してください"
              ref={register({
                required: true,
                pattern: /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/
              })}
              onChange={event => setEmailUniqe("")}
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

          <Form.Group controlId="formBasicPasswordConfirmation">
            <Form.Label className="h3 text-white">Password Confirmation</Form.Label>
            {errors.passwordConfirmation?.type === 'required' && <div className='formError text-white'>確認用パスワードを入力してください</div>}
            {errors.passwordConfirmation?.type === 'confirm' && <div className='formError text-white'>パスワードと一致しません</div>}
            <div className="text-white"></div>
            <Form.Control
              name="passwordConfirmation"
              type="password"
              placeholder="もう一度パスワードを入力してください"
              ref={register({
                required: true,
                validate: {
                  confirm: value => value === Password
                }
              })}
            />
          </Form.Group>

          <Col className="text-right">
          <Btn
            size="lg"
            variant="primary"
            type="submit"
            className="mt-3 signin"
            nameValue="登録する"
            onClick={reset}
          />
          </Col>
        </Form>
      </Col>
    </Row>
    </div>
  )
}