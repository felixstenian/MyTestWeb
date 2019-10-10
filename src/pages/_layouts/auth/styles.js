import styled from 'styled-components';
import { darken } from "polished";

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, rgb(50, 127, 290), #00BFFF);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  /* width: 100%; */
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }

  input {
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    color: rgba(255, 255, 255, 0.7);;
    margin: 0 0 10px;

    &::placeholder {
      color: #fff;
    }
  }

  span {
    color: #FF0000;
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bold;
  }

  button {
    margin: 5px 0 0;
    height: 44px;
    background: #40E0D0;
    color: rgba(255, 255, 255, 0.8);
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.09, "#40E0D0")}
    }
  }

  a {
    color: rgba(255, 255, 255, 0.8);;
    margin-top: 15px;
    font-size: 16px;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }

  img {
    width: 50%;
    border-radius: 30%;
    align-self: center;
    border: 1px solid rgba(255,255,255, 0.3);
    margin-bottom: 30px;
  }

  h1 {
    color: rgba(255,255,255, 0.8);
  }
  
`;

