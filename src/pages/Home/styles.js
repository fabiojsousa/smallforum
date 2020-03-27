import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 600px;

  a {
    display: flex;
    background-color: rgb(255, 255, 231);
    width: 150px;
    height: 150px;
    font-size: 35px;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    color: rgb(0, 119, 204);
    border: 1px solid rgb(0, 119, 204);
    box-shadow: 1px 2px 5px 1px darkgray;

    &:hover {
      color: rgb(0, 149, 255);
      border: 2px solid rgb(0, 149, 255);
      box-shadow: 1px 2px 5px 1px lightgreen;
    }
  }
`;
