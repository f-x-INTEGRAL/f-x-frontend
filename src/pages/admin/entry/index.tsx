import React, { NextPage } from 'next';
import Image from 'next/image';
import Symbol from '../../../assets/images/Symbol.png';
import { Input, Layout, MainTitle, Button } from '@/components';
import styled from '@emotion/styled';

export const EntryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 100px;
`;

const adminEntryPage: NextPage = () => {
  return (
    <Layout>
      <EntryWrapper>
        <Image src={Symbol} alt="admin_entry_logo"></Image>
        <MainTitle
          x45
          title={' "ADMIN에 접근하시려면 PASSWORD를 입력하세요.'}
        />
        <Input type="password" placeholder="Writing admin password..."></Input>
        <Button text="OK"></Button>
      </EntryWrapper>
    </Layout>
  );
};

export default adminEntryPage;
