import styled from '@emotion/styled';
import Link from 'next/link';
import Image from 'next/image';

export const NavbarContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  background-color: #fff;
  box-shadow: 0 0 10px #e6e6e6, 0 0 20px #e6e6e6, 0 0 30px #e6e6e6;

  z-index: 100;
`;
export const LogoImage = styled(Image)`
  width: 150px;
  height: 65px;

  @media (max-width: 768px) {
    width: 130px;
    height: 62px;
  }
`;
export const NavbarMenu = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const NavbarTextMenu = styled.div``;

export const NavbarMenuLink = styled(Link)`
  font-size: 16px;
  font-weight: 600;
  color: #abaaaa;
  text-decoration: none;

  cursor: pointer;

  &:hover {
    transition: 0.3s;
    color: #000;
  }
`;
