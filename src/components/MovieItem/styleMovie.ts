import styled from 'styled-components';

export const MovieItemComponent = styled.article`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 30px;
  }

  img {
    width: 100%;
    max-height: 350px;
  }

  a {
    background-color: brown;
    width: 100%;
    text-align: center;
    padding: 10px;
    color: #fff;
    border-radius: 0 0 10px 10px;
  }

  @media only screen and (max-width: 550px){
    h2 {
      font-size: 23px;
    }
  }
`;