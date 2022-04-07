import styled from 'styled-components';

export const EmptyList = styled.div`
  min-height: 90vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 900px){
    padding: 30px 4%;
  }

  @media only screen and (max-width: 550px) {
    h1 {font-size:20px}
  }
`;

export const FavoriteContainer = styled.section`
  width: 100%;
  min-height: 100vh;

  h2 {
    font-size: 28px;
    text-align: center;
    margin: 50px 0 40px
  }

  ul {
    max-width: 900px;
    margin: 0 auto;
  }

  li {
    width: 100%;
    /* margin-bottom: 15px; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding: 20px 0;

    span {
      font-size: 22px;
    }
  }

  li:last-child {
    border-bottom: none;
  }

  .list-options{
    a, svg {
      margin: 0 10px;
      color: brown;
      cursor: pointer
    }
  }

  @media only screen and (max-width: 900px){
    padding: 30px 4%;
  }

  @media only screen and (max-width: 550px){
    li {
      span {
        font-size: 17px;
      }
    }

    .list-options {
      a {font-size: 14px} 
    }
  }
`;