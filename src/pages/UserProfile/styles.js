import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 600px;

  .user {
    background: rgb(253, 247, 227);
    display: block;
    margin: 5px 5px;
    padding: 5px;
    max-width: 600px;
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
      font-size: 20px;

      p:first-child {
        display: flex;
        align-items: center;
        justify-content: center;
        background: darkgray;
        width: 120px;
        height: 120px;
        margin: 0 auto;
        font-size: 50px;
      }

      p + p {
        margin-top: 5px;
      }
    }

    main {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      font-size: 15px;
      padding: 30px;

      dt {
        font-weight: 600;
        margin-top: 10px;
      }

      .basic,
      .address, .company {
        max-width: 400px;
        width: 100%;
        border-bottom: 1px solid darkgray;
        padding: 10px 0;

        div {
          width: 100px;
          margin-right: 20px;
          overflow-wrap: break-word;
        }
      }
      dl {
        display: flex;
        flex-wrap: wrap;
      }

      h3 {
        font-weight: normal;
        text-decoration: underline;
        text-align: center;
      }

      .company {
        border: 0;
      }
    }
  }
`;
