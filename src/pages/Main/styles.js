import styled from 'styled-components';
import { darken } from "polished";

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;  
  

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

  img {
    width: 50%;
    border-radius: 30%;
    align-self: center;
    border: 1px solid rgba(255,255,255, 0.3);
    margin-bottom: 30px;
  }
`;

