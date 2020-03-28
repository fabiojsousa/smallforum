import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${props => props.data === "notReady" && "center"};
  min-height: 600px;

  h2 {
    margin-bottom: 10px;
    font-weight: normal;
    width: 100%;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    .user {
      background: rgb(253, 247, 227);
      display: block;
      width: 200px;
      height: 200px;
      margin: 5px 5px 0 0;
      padding: 5px;
      border-radius: 5px;
      color: black;
      border: 1px solid darkgray;
      box-shadow: 1px 2px 5px 1px darkgray;

      header {
        font-weight: bold;
        text-align: center;
        background: #eff0f1;
        border-radius: 5px;
        border: 1px solid darkgray;
        padding: 5px;

        p:first-child {
          display: flex;
          align-items: center;
          justify-content: center;
          background: darkgray;
          width: 50px;
          height: 50px;
          margin: 0 auto;
        }

        p + p {
          margin-top: 5px;
        }
      }

      main {
        display: flex;
        align-items: center;
        justify-content: center;

        a {
          margin-top: 30px;
        }
      }
    }
  }
`;
