import React, { Component } from "react";
import { FaSpinner } from "react-icons";

import Container from '../../components/Container';

import { Button } from "./styles";

export default class Main extends Component {
  render() {
    return (
      <Container>
        <h1>MyTest</h1>
        <Button>Login</Button>
        <Button>Cadatro de usuário</Button>
      </Container>
    )
  }
}