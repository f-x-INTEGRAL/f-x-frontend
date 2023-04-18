import React from 'react';
import * as S from './styled';

interface ButtonProps {
  text: string;
}

export const Button = ({ text }: ButtonProps) => {
  return (
    <S.ButtonWrapper>
      <S.Button>{text}</S.Button>
      <S.TextWrapper>
        <S.TextBox>press</S.TextBox>
        <S.TextBox black>Enter</S.TextBox>
      </S.TextWrapper>
    </S.ButtonWrapper>
  );
};
