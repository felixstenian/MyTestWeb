import React from 'react';
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";

import { signUpRequest } from "../../store/modules/auth/actions";

import logo from "../../assets/logoTemp.png";

const schema = Yup.object().shape({
  name: Yup.string().required("Nome completo obrigatório"),
  user_name: Yup.string().required("Nome de usuário obrigatório"),
  email: Yup.string()
  .email("Insira um e-mail válido")
  .required("E-mail obrigatório"),
  password: Yup.string().min(6, "No minimo 6 caracteres")
  .matches(/[a-z]/, "Deve conter pelo menos uma letra minúscula")
  .matches(/[A-Z]/, "Deve conter pelo menos uma letra maiúscula").required("Senha obrigatória")
})

export default function SignUp() {
  const dispatch = useDispatch();
  

  function handleSubmit({ name, user_name, email, password, avatar_id = 1 }) {
    dispatch(signUpRequest(name, user_name, email, password, avatar_id));
    
  }

  
  return (
    <>
    <img src={logo} alt="MyTest" />
    <h1>Criar Conta</h1>
    <hr/>
    
    <Form schema={schema} onSubmit={handleSubmit}>
      
      <Input name="name" placeholder="Nome completo" />
      <Input name="user_name" placeholder="Nome de usuário" />
      <Input name="email" type="email" placeholder="Seu e-mail" />
      <Input name="password" type="password" placeholder="Sua senha" />

      <button type="submit">criar conta</button>
      <Link to="/entrar">Já tenho conta</Link>
    </Form>
    </>
  );
}
