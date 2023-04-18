import React from 'react';

import * as S from './styled';

interface MainTitleProps {
  title: string;
  white?: boolean;
  x45?: boolean;
}

export const MainTitle = ({ title, ...props }: MainTitleProps) => {
  return (
    <>
      <S.MainTitle {...props}>{title}</S.MainTitle>
    </>
  );
};
