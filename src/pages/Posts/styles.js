import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 10px;
  
  
  header {
    display: flex;
    width: 100%;
    align-items: right;

    div{
      display: block;
      width: 250px;
    }
  }

  h1 {
    margin-bottom: 10px;
  }

  .posts {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 5px;
    background: rgb(228, 230, 231);
    width: 100%;
    height: 70px;
    padding: 15px;
  }
`;
