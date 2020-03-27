import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 600px;


  div {
    display: flex;
    background-color: rgb(255, 255, 231);
    width: 200px;
    height: 150px;
    font-size: 35px;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    color: black;
    border: 1px dashed black;
    box-shadow: 1px 2px 5px 1px darkgray;

    &:hover {
      border: 3px solid black;
      width: 220px;
      height: 170px;
      box-shadow: 1px 2px 5px 1px lightgreen;
    }
  }

  
`;
