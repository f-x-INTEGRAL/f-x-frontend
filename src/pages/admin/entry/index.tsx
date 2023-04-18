import React, { NextPage } from 'next';
import Image from 'next/image';
import Symbol from '../../../assets/images/Symbol.png';
import * as S from './styled';
import { Input, Layout, MainTitle, Button } from '@/components';
const adminEntryPage: NextPage = () => {
  return (
    <Layout>
      <S.entryWrapper>
        <Image src={Symbol} alt="admin_entry_logo"></Image>
        <MainTitle
          x45
          title={' "ADMIN에 접근하시려면 PASSWORD를 입력하세요.'}
        />
        <Input type="password" placeholder="Writing admin password..."></Input>
        <Button text="OK"></Button>
      </S.entryWrapper>
    </Layout>
  );
};

export default adminEntryPage;
