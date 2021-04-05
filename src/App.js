import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import axios from 'axios'

import Home from './view/layouts/home/Home'
import Registration from './view/layouts/home/auth/Registration'
import Login from './view/layouts/home/auth/Login'
import Dashboard from './view/layouts/dashboard/Dashboard'
import Header from './view/components/header'
import Footer from './view/components/footer'

export default function App() {
  // ログイン判定
  const [loggedInStatus, setLoggedInStatus] = useState(false)
  const [user, setUser] = useState({})

  const handleLogin = (data) => {
    setLoggedInStatus(true)
    setUser(data.user)
  }

  const handleSuccessfulAuthentication = (data, props) => {
    handleLogin(data)
    props.history.push("/dashboard")
  }

  useEffect(() =>{
    checkLoginStatus()
  })

  const root = process.env.REACT_APP_APP_BACKEND_PATH
  const checkLoginStatus = () => {
    axios.get(root + "/logged_in", {withCredentials: true})
    .then(response => {
      if(response.data.logged_in && !loggedInStatus){
        setLoggedInStatus(true)
        setUser(response.data.user)
      }else if(!response.data.logged_in && loggedInStatus){
        setLoggedInStatus(false)
        setUser({})
      }
    }).catch(error => {
      console.log("ログインエラー", error)
    })
  }

  const handleLogout = () => {
    setLoggedInStatus(false)
    setUser({})
  }

  return (
    <div>
      <BrowserRouter>
        <Header
          loggedInStatus={loggedInStatus}
          handleLogout={handleLogout}
        />
        <Switch>
          <Route exact path={ "/" } component={ Home } />
          <Route
            exact path={ "/signup" }
            render={props => (
              <Registration {...props}
                loggedInStatus={loggedInStatus}
                handleSuccessfulAuthentication={handleSuccessfulAuthentication}
              />
            )}
          />
          <Route
            exact path={ "/login" }
            render={props => (
              <Login {...props}
                loggedInStatus={loggedInStatus}
                handleSuccessfulAuthentication={handleSuccessfulAuthentication}
              />
            )}
          />
          <Route
            exact path={ "/dashboard" }
            render={props =>(
              <Dashboard {...props}
                loggedInStatus={loggedInStatus} />
            )}
          />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}