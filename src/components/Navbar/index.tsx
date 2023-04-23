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
          <S.LogoImage
            src={Logo}
            alt="Intergal Logo"
            style={{ cursor: 'pointer' }}
          />
        </Link>
        <S.NavbarTextMenu>
          <S.NavbarMenuLink href="/form" style={{ marginRight: '30px' }}>
            티켓 예매
          </S.NavbarMenuLink>
          <S.NavbarMenuLink href="/faq">자주 묻는 질문</S.NavbarMenuLink>
        </S.NavbarTextMenu>
      </S.NavbarMenu>
    </S.NavbarContainer>
  );
};
