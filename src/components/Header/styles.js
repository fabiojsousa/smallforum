import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  position: fixed;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eff0f1;
  border-bottom: 1px solid darkgray;
  box-shadow: 1px 2px 5px 1px darkgray;

  a {
    font-size: 45px;

    /* :hover {
      background-color: rgb(228, 230, 232);
    } */
  }
  span:last-child {
    font-weight: bold;
  }
`;
