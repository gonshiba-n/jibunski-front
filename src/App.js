import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from "./top-page/Home";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}