import React from 'react';
import { Layout, MainTitle, Button } from '@/components';
import { useRouter } from 'next/router';

import styled from '@emotion/styled';
import { css } from '@emotion/react';

const CompletedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  float: left;
  width: 72%;
  padding: 120px 0;

  @media (max-width: 768px) {
    width: 60%;
  }
`;

const TitleContainer = styled.div`
  padding-right: 200px;

  @media (max-width: 768px) {
    width: 450px;
    padding: 0;
    margin-left: 20px;
  }
`;

const CompletedDescription = styled.text<{
  x20?: boolean;
  x18?: boolean;
  ab?: boolean;
}>`
  padding-top: ${(props) => (props.x20 ? '20px' : '3px')};
  font-size: ${(props) => (props.x18 ? '18px' : '28px')};
  color: ${(props) => (props.ab ? '#747474' : 'black')};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 35px 0;
  @media (max-width: 768px) {
    padding-left: 25px;
    padding-right: 10px;
  }
`;

const ButtonContainer = styled.div`
  padding-right: 230px;
  @media (max-width: 768px) {
    padding-top: 100px;
  }
`;

const Completed = () => {
  const router = useRouter();
  return (
    <Layout>
      <CompletedWrapper>
        <TitleContainer>
          <MainTitle x45 title=' "안녕하세요, f(x);나봄 입니다." ' />
        </TitleContainer>
        <DescriptionWrapper>
          <CompletedDescription x20>
            예매해주셔서 감사합니다.
          </CompletedDescription>
          <CompletedDescription>
            공연은 5월 13일 18시 30분이며, 장소는 홍대 Alive Hall입니다.
          </CompletedDescription>
          <CompletedDescription>
            예매 가격은 8,000원, 현장 가격은 10,000원입니다.
          </CompletedDescription>
          <CompletedDescription>
            예매하신 분은 아래의 계좌번호로 입금해주시길 바랍니다.
          </CompletedDescription>
          <CompletedDescription x20>
            계좌: 국민 194602-04-188003 안정기
          </CompletedDescription>
          <CompletedDescription
            x18
            ab
            css={css`
              @media (max-width: 768px) {
                font-size: 20px;
              }
            `}
          >
            입금자명은 방금 화면에서 입력하신 성함과 동일하게 하여 입금해주시기
            바랍니다.
          </CompletedDescription>
          <ButtonContainer>
            <Button text="OK" type="submit" onClick={() => router.push('/')} />
          </ButtonContainer>
        </DescriptionWrapper>
      </CompletedWrapper>
    </Layout>
  );
};

export default Completed;
