import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import axios from 'axios'

import Home from './view/layouts/home/Home'
import Registration from './view/layouts/home/auth/Registration'
import Login from './view/layouts/home/auth/Login'
import Dashboard from './view/layouts/dashboard/Dashboard'
import Header from './view/components/header'
import Footer from './view/components/footer'
import { ServerError } from './view/layouts/errors/500'
import { NotFoundError } from './view/layouts/errors/404'

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
          <Route exact path={ "/" }
            render={props => (loggedInStatus
              ? <Redirect to="/dashboard" />
              : <Home />
            )}
          />
          <Route
            exact path={ "/signup" }
            render={props => (loggedInStatus
              ? (<Redirect to="/dashboard" />)
              :<Registration {...props}
                  loggedInStatus={loggedInStatus}
                  handleSuccessfulAuthentication={handleSuccessfulAuthentication}
                />
            )}
          />
          <Route
            exact path={ "/login" }
            render={props => (loggedInStatus
              ? (<Redirect to="/dashboard" />)
              :<Login {...props}
                  loggedInStatus={loggedInStatus}
                  handleSuccessfulAuthentication={handleSuccessfulAuthentication}
                />
            )}
          />
          <Route
            exact path={ "/dashboard" }
            render={props => (!loggedInStatus
              ? <Home />
              :<Dashboard {...props}
                loggedInStatus={loggedInStatus} />
            )}
          />
          <Route exact path={"/500"} component={ ServerError } />
          <Route exact path={"/404"} component={ NotFoundError } />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}