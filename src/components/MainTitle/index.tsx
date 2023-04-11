import React from 'react';

import * as S from './styled';

interface MainTitleProps {
  title: string;
}

export const MainTitle = ({ title }: MainTitleProps) => {
  return (
    <>
      <S.MainTitle>{title}</S.MainTitle>
    </>
  );
};
