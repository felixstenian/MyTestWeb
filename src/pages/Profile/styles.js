import styled from 'styled-components';
import { darken } from "polished";

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  div {
    width: 90%;
    border: 0;
    border-radius: 20px;
    padding: 20px;
    background: #fff;
    display: flex;
    align-self: center;
    align-items: center;

    img {
      margin-right:20px;
      width: 30%;
      border-radius: 5%;
      border: 2px solid rgba(255,255,255, 0.1);
      background: #eee;
    }

    ul {
      font-size: 20px;
      color: #333;
      

      li {
        margin-bottom: 10px;
      }

      small {
        font-size: 14px;
        color: #999;
        justify-content: left;
        text-align: center;
      }
    }
  }


  button {
    width: 80%;
    margin: 20px 0 0;
    height: 44px;
    background: #f64c75;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;
    align-self: center;
    align-items: center;

    &:hover {
      background: ${darken(0.09, "#f64c75")}
    }
}
  
`;