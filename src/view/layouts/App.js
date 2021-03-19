import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Nav } from '../components/nav'

import Home from "./home/Home";

export default function App() {
  return (
    <div>
      <Nav />
      <BrowserRouter>
        <Switch>
          <Route exact path={ "/" } component={ Home } />
          {/* <Route exact path={ "/login" } component={ Login } /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}