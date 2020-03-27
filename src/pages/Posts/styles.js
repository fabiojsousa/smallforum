import styled from "styled-components";

export const Container = styled.div`
  text-align: left;

  header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px;

    div {
      display: block;
    }
  }

  h2 {
    margin-bottom: 10px;
    font-weight: normal;
  }

  .posts {
    margin-bottom: 5px;
    background: rgb(253, 247, 227);;
    width: 100%;
    height: 70px;
    padding: 15px;

    a {
      color: rgb(0, 119, 204);

      :hover {
        color: rgb(0, 149, 255);
      }
    }

  }
`;
