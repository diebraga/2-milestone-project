import styled, { css } from 'styled-components';

import Tooltip from '../tooltip';

interface ContainerProops {
  isFocused: boolean;
  isErrored: boolean;
}
export const Container = styled.div<ContainerProops>`
  background: #232129;
  border-radius: 5px;
  width: 100%;

  color: #666360;
  border: 2px solid #232129;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${proops =>
    proops.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${proops =>
    proops.isFocused &&
    css`
      color: tomato;
      border-color: tomato;
    `}



  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #fff;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 10px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }
`;
