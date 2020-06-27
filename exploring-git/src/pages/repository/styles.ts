import styled from 'styled-components';
import { shade } from 'polished';

export const Issues = styled.div`
  margin-top: 80px;

  a {
    background: rgba(0, 0, 0, 0.6);
    border-radius: 5px;
    width: 100%;

    padding: 24px;
    display: block;
    text-decoration: none;

    align-items: center;
    display: flex;
    transition: transform 2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    svg {
      margin-left: auto;
      color: #fff;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #fff;
      }

      p {
        font-size: 18px;
        margin-top: 4px;
        color: #a8a8b3;
      }
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    margin-right: auto;

    align-self: center;
    color: #fff;
    font-size: 18px;
  }

  svg {
    margin-left: 30px;
    margin-right: 2px;
    color: #fff;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fff;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#fff')};
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const Loading = styled.section`
  color: #fff;
  font-size: 40px;
  align-content: center;
`;

export const RepoInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;
  }

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  div {
    margin-left: 24px;

    strong {
      font-size: 36px;
      color: #fff;
    }

    p {
      margin-top: 4px;
      font-size: 18px;
      color: ${shade(0.2, '#fff')};
    }
  }

  ul {
    margin-top: 40px;
    list-style: none;
    display: flex;

    li {
      h2 {
        font-size: 30px;
        color: ${shade(0.2, '#fff')};
      }
      & + li {
        margin-left: 70px;
      }
      strong {
        display: block;
        font-size: 36px;

        color: #fff;
      }

      span {
        display: block;
        margin-top: 4px;
        color: ${shade(0.2, '#fff')};
      }
    }
  }
`;
