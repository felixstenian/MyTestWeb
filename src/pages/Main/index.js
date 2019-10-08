import React from 'react';
import { Link } from "react-router-dom";

import logo from "../../assets/logoTemp.png";

import { Content } from './styles';

export default function Main() {
  return (
    <Content>
      <img src={logo} alt="mytest"/>
      <Link to="/entrar"><button type="submit">Login</button></Link>
      <Link to="/criarconta"><button type="submit">Criar conta</button></Link>
    </Content>
    
  );
}
