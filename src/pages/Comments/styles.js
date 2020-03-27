import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 600px;

  header {
    border-bottom: solid 1px rgb(228, 230, 232);
    padding-bottom: 10px;

    strong {
      font-size: 27px;
    }
  }

  .question {
    margin-top: 10px;

    p + p {
      margin-top: 10px;
    }

    p small {
      color: rgb(106, 115, 124);
    }
  }

  .answers {
    margin-top: 20px;

    > p {
      margin-top: 10px;
      margin-bottom: 10px;
      font-weight: 600;
    }

    > div {
      margin-bottom: 10px;
      border-bottom: solid 1px rgb(228, 230, 232);
      padding: 10px 0;

      div {
        margin-top: 5px;
        display: flex;
        justify-content: flex-end; 

        div {
          display: block;
          width: 200px;

          small {
            color: rgb(106, 115, 124);
          }

          label {
            font-weight: 600;
          }
        }
      }
    }
  }
`;
