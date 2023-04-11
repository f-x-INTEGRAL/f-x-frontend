import styled from '@emotion/styled';

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

export const NavbarMenu = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const NavbarTextMenu = styled.div``;

export const NavbarMenuLink = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #abaaaa;

  cursor: pointer;

  &:hover {
    transition: 0.3s;
    color: #000;
  }
`;
