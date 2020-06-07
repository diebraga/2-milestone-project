import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<InputProps> = props => {
  return (
    <>
      <Container>
        <input {...props} />
      </Container>
    </>
  );
};

export default Input;

/**
 *   iterface InputProps param give us access to HTML input params.
 *    on input repass all props ex {...props}
 *
 *    using IconBaseProps I cab access all proops of a componebnt
 */
