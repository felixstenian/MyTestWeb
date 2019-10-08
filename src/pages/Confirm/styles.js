import styled from 'styled-components';
import { darken } from "polished";

export const Container = styled.div`

  button {
    width: 100%;
    margin: 20px 0 0;
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

  hr {
    border: 0;
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
    margin: 10px 0 20px;
  }

  h1, p {
    color: rgba(255,255,255, 0.8);
  }
  
`;
