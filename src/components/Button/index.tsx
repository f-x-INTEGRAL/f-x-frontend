import React from 'react';
import * as S from './styled';

interface ButtonProps {
  text: string;
  type?: 'submit';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ text, ...props }: ButtonProps) => {
  return (
    <S.ButtonWrapper>
      <S.Button {...props}>{text}</S.Button>
      <S.TextWrapper>
        <S.TextBox>press</S.TextBox>
        <S.TextBox black> OK</S.TextBox>
      </S.TextWrapper>
    </S.ButtonWrapper>
  );
};
