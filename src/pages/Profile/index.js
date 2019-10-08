import React from 'react';
import { useDispatch, useSelector } from "react-redux";


import { signOut } from "../../store/modules/auth/actions";

import { Container } from './styles';


export default function Profile() {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);
 
  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
    <div>
      <img src="https://api.adorable.io/avatars/50/abott@adorable.png" alt="mytest"/>
      <ul>
        <li><small>Nome: </small>{profile.name}</li>
        <li><small>Usuário: </small>{profile.user_name}</li>
        <li><small>Email: </small>{profile.email}</li>
      </ul>
    </div>
    
    <button type="submit" onClick={handleSignOut}>Sair</button>
  </Container>
  )
}
