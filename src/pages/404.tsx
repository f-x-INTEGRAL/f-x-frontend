import React, { NextPage } from 'next';
import styled from '@emotion/styled';
import Link from 'next/link';
const NotFoundPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const NotFoundText = styled.div`
  font-size: 150px;
  font-weight: 800;
  color: #62a1f1;
`;
const NotFoundDescription = styled.div`
  font-size: 25px;
  text-align: center;
  line-height: 1.3;
`;

const GoToMainButton = styled.a`
  margin-top: 30px;
  font-size: 20px;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

const NotFoundPage: NextPage = function () {
  return (
    <NotFoundPageWrapper>
      <NotFoundText>404</NotFoundText>
      <NotFoundDescription>
        찾을 수 없는 페이지입니다. <br />
        다른 콘텐츠를 보러 가보시겠어요?
      </NotFoundDescription>
      <GoToMainButton href="/">메인으로</GoToMainButton>
    </NotFoundPageWrapper>
  );
};

export default NotFoundPage;
