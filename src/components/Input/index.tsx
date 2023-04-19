import React, { useState } from 'react';
import * as S from './styled';

interface InputProps {
  type: any;
  placeholder: string;
  error?: string;
  onChange?: any;
  value?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, placeholder, error, ...props }, ref) => {
    const [isInputClicked, setIsInputClicked] = useState(false);
    return (
      <S.InputWrapper>
        <S.InputText
          onFocus={() => {
            setIsInputClicked(true);
          }}
          onBlur={() => {
            setIsInputClicked(false);
          }}
          type={type}
          placeholder={isInputClicked === true ? '' : placeholder}
          ref={ref}
          {...props}
        />
        <S.InputErrorText>{error}</S.InputErrorText>
      </S.InputWrapper>
    );
  }
);
