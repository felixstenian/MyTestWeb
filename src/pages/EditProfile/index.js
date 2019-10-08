import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Form, Input } from "@rocketseat/unform";

import { updateProfileRequest } from "../../store/modules/user/actions";

import AvatarInput from "../../components/Avatarinput";

import { Container } from './styles';

export default function EditProfile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id"/>
        
        <Input name="name" placeholder="Nome completo" />
        <Input name="user_name" placeholder="Nome de usuário" />
        <Input name="email" type="email" placeholder="Seu e-mail" />

        <hr />

        <Input type="password" name="oldPassword" placeholder="Sua senha atual" />
        <Input type="password" name="password" placeholder="Nova senha" />
        <Input type="password" name="confirmPassword" placeholder="Confirme sua nova senha" />

        <button type="submit">Atualizar perfil</button>
        
      </Form>
      <button type="submit">Cancelar</button>
    </Container>
  )
}
