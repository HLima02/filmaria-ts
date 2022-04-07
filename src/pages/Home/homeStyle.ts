import styled from 'styled-components';

export const Container = styled.section`
  max-width: 900px;
  margin: 0 auto;
  min-height: 100vh;

  .empty-list {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .list-movies {
    padding: 50px 0;
  }

  @media only screen and (max-width: 900px){
    padding: 0 4%;
  }

  @media only screen and (max-width: 550px){
    padding: 0;
    
  }
`;