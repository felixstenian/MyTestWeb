import React from "react";
import { Switch } from 'react-router-dom';
import Route from "./Route";

import Main from "../pages/Main";
import Profile from "../pages/Profile";
import EditProfile from "../pages/EditProfile";

import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";

import Active from "../pages/Active";
import Confirm from "../pages/Confirm";



export default function Routes() {
  return (
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/perfil" component={Profile} isPrivate/>
        <Route path="/editarperfil" component={EditProfile} isPrivate/>

        <Route path="/criarconta" component={SignUp}/>
        <Route path="/entrar" component={SignIn}/>

        <Route path="/ativacao/:id" component={Active} />
        <Route path="/confirmar" component={Confirm}/>
      </Switch>
  )
}