import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

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
        text-decoration: none;
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
`;

export const Main = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 70px 10px 10px;
`;