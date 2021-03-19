import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './view/components/header'
import Footer from './view/components/footer'

import Home from './view/layouts/home/Home'

export default function App() {
  return (
    <div>
      <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path={ "/" } component={ Home } />
          </Switch>
        </BrowserRouter>
      <Footer />
    </div>
  );
}