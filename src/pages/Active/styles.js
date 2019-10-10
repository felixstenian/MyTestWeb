import styled from 'styled-components';
import { darken } from "polished";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;  

  p {
    font-size: 16px;
    color: #333;
  }
  

  button {
    width: 100%;
    margin: 5px 0 0;
    height: 44px;
    background: #40E0D0;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.09, "#40E0D0")}
    }
  }
`;

