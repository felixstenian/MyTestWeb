import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from "../pages/Main";
import Profile from "../pages/Profile";

import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";

import Active from "../pages/Active";


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/perfil" component={Profile} isPrivate/>

        <Route path="/criarconta" component={SignUp}/>
        <Route path="/entrar" component={SignIn}/>

        <Route path="/ativacao" component={Active}/>
      </Switch>
    </BrowserRouter>
  )
}