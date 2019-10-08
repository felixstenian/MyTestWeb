import React from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import logo from "../../assets/logoTemp.png";

import { Container, Content, Profile} from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="mytest"/>
          <Link to="/perfil">Perfil</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile.user_name}</strong>
              <Link to="/editarperfil">Editar Perfil</Link>
            </div>
            <img src={profile.avatar.url && "https://api.adorable.io/avatars/50/abott@adorable.png"} alt="mytest" />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
