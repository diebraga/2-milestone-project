import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #488282;
  border-radius: 5px;
  border: 0;
  color: #fff;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#488282')};
  }
`;
