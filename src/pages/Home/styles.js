import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 600px;


  div {
    display: flex;
    background-color: rgb(255, 255, 231);
    width: 250px;
    height: 200px;
    font-size: 35px;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    color: black;
    border: 1px dashed black;
    box-shadow: 3px 3px 5px 6px #ccc;

    &:hover {
      border: 3px solid black;
      width: 270px;
      height: 220px;
      box-shadow: 3px 3px 5px 6px lightgreen;
    }
  }

  
`;
