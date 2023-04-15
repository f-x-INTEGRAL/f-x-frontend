import React, { useState } from 'react';
import * as S from './styled';

interface InputProps {
  type: any;
  placeholder: string;
}

export const Input = ({ type, placeholder }: InputProps) => {
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
      ></S.InputText>
    </S.InputWrapper>
  );
};
