import React from 'react';
import * as S from './styled';

interface InputProps {
  type: any;
  placeholder: string;
}

export const Input = ({ type, placeholder }: InputProps) => {
  return (
    <S.InputWrapper>
      <S.InputText type={type} placeholder={placeholder}></S.InputText>
    </S.InputWrapper>
  );
};
