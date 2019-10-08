import React from 'react';
import { Link } from "react-router-dom";

// import { Container } from './styles';

export default function Confirm() {
  return (
    <>
      <h1>Confirmar Cadastro</h1>

      <hr/>

      <p>Acesse a caixa de entrada do seu email e abra o email de confirmação com o assunto "Confirmar Cadastro"</p>

      <Link to="/entrar"><button type="submit">Login</button></Link>
    </>
  );
}
