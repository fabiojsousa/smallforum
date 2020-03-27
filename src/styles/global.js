import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    *:focus{
        outline: 0;
    }

    html, body, #root {
        height: 100%;
    }

    body{
      -webkit-font-smoothing: antialiased;
    }

    body, input, button {
      font: 'Roboto', sans-serif;
    }

    a {
      color: rgb(0, 119, 204);
      text-decoration: none;

      :hover {
        color: rgb(0, 149, 255);
      }
    }

    ul{
        list-style: none;
    }

    button {
        cursor: pointer;
    }
`;

export const Wrapper = styled.div`
  height: 100%;
  overflow: auto;
`;

export const Main = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 80px 10px 10px;
`;