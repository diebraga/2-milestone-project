import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const { fieldName, registerField, error } = useField(name);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  return (
    <>
      <Container isFocused={isFocused}>
        <input
          onBlur={handleInputBlur}
          onFocus={() => setIsFocused(true)}
          ref={inputRef}
          {...rest}
        />

        {error}
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
