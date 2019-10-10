import React from 'react';
import { Link } from "react-router-dom";

import logo from "../../assets/logoTemp.png";

import { Container } from './styles';

export default function Confirm() {
  return (
    <Container>
      <img src={logo} alt="mytest"/>
      <h1>Confirme seu Cadastro</h1>

      <hr/>

      <p>Acesse a caixa de entrada do seu email e abra o email de confirmação com o assunto "Confirmar Cadastro"</p>

      <Link to="/"><button type="submit">Home</button></Link>
    </Container>
  );
}
