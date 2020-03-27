import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 600px;

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
    width: 100%;
  }

  .posts {
    margin-bottom: 5px;
    background: rgb(253, 247, 227);
    width: 100%;
    height: 70px;
    padding: 15px;
  }
`;
