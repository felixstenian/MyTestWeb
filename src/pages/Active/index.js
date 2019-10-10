import React, { useEffect } from 'react';
import api from "../../services/api";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

import logo from "../../assets/logoTemp.png";

import { Container } from './styles';

export default function Active() {
  const id_hash = useParams().id;

  useEffect(() => {
    async function load() {
      await api.put(`/sessions/${id_hash}`)
    }

    load();
  }, );
  
  return (
    <Container>
      <img src={logo} alt="mytest"/>
      <h1>Conta ativada!</h1>
      
      <p>Realize seu login</p>
      <Link to="/entrar"><button type="submit">Login</button></Link>
      
    </Container>
  )
}
