import React from 'react';
import Image from 'next/image';

import Logo from '@/assets/images/logo.png';
import * as S from './styled';

export const Navbar = () => {
  return (
    <S.NavbarContainer>
      <S.NavbarMenu>
        <Image src={Logo} alt="Intergal Logo" style={{ cursor: 'pointer' }} />
        <S.NavbarTextMenu>
          <S.NavbarMenuLink href="/form" style={{ marginRight: '30px' }}>
            예매 하기
          </S.NavbarMenuLink>
          <S.NavbarMenuLink href="/qna">자주 묻는 질문</S.NavbarMenuLink>
        </S.NavbarTextMenu>
      </S.NavbarMenu>
    </S.NavbarContainer>
  );
};
