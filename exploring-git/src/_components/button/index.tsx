import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <>
      <Container type="button" {...rest}>
        {children}
      </Container>
    </>
  );
};

export default Button;

/**
 *   iterface ButtonProps param give us access to HTML button params.
 *    on button repass all props ex {...props}
 */
