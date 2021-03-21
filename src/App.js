import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './view/layouts/home/Home'
import Registration from './view/layouts/home/auth/Registration'
import Header from './view/components/header'
import Footer from './view/components/footer'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={ "/" } component={ Home } />
          <Route exact path={ "/signup" } component={ Registration } />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}