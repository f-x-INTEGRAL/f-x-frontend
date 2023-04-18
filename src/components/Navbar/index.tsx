import React from 'react';
import Image from 'next/image';

import Logo from '@/assets/images/logo.png';
import * as S from './styled';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <S.NavbarContainer>
      <S.NavbarMenu>
        <Link href="/">
          <Image src={Logo} alt="Intergal Logo" style={{ cursor: 'pointer' }} />
        </Link>
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
