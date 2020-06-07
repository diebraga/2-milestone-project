import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    font-size: 48px;
    color: #fff;
    max-width: 450px;
    line-height: 56px;

    margin-top: 80px;
  }

  form {
    margin-top: 40px;
    max-width: 700px;
    display: flex;

    input {
      flex: 1;
      height: 70px;
      padding: 0 24px;
      border: 0;
    }

    button {
      width: 210px;
      height: 70px;
      font-weight: bold;
      margin-left: 10px;
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #232129;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.4s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      color: #666360;
      margin-left: 16px;

      strong {
        font-size: 20px;
      }
    }

    svg {
      margin-left: auto;
    }
  }
`;
