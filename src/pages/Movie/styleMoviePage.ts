import styled from 'styled-components';

export const EmptyList = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MovieContainer = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 30px 0;
  min-height: 90vh;

  h2 {
    font-size: 28px;
  }

  img {
    width: 100%;
    max-height: 350px;
    margin: 20px 0;
  }

  h3 {
    margin-bottom: 20px;
  }

  .btn-area {
    button, a {
      margin: 15px 5px 0 0;
      cursor: pointer;
      border-radius: 5px;
      border: 0;
      font-size: 20px;
      outline: 0;
      padding: 12px;
      transition: all 0.5s;
      background-color: #EFEFEF;
    }
    a {
      text-decoration: none;
      color: #000;
    }

    button:hover, a:hover{
      background-color: brown;
      color: #EFEFEF;
    }
  }

  @media only screen and (max-width: 900px){
    padding: 30px 4%;
  }
`;