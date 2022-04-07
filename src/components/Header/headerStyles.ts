import styled from 'styled-components';

export const HeaderComponent = styled.header`
  width: 100%;
  background-color: brown;
  height: 60px;
  nav {
    height: inherit;
    margin: 0 auto;
    max-width: 900px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logoTitle {
      font-size: 30px;
    }

    .favoritos {
      background-color: #eee;
      color: brown;
      padding: 8px 12px;
      border-radius: 8px;
      transition: all 0.3s;
    }

    .favoritos:hover {
      background-color: #ccc;
    }
    
    a {
      color: #fff;
    }
  }
  @media only screen and (max-width: 900px){
    padding: 0 4%;

    nav {
      .logoTitle {
        font-size: 25px;
      }
    }
  }
`;