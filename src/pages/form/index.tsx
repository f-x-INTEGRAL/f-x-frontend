import React from 'react';
import { Layout, MainTitle } from '@/components';

import * as S from './styled';

const Form = () => {
  return (
    <Layout>
      <S.FormContainer>
        <MainTitle title="Reservation" />
        <S.Form>
          <h1>이름을 입력해주세요</h1>
          <input placeholder="Type your name here..." />
          <br />
          <button>OK</button>
        </S.Form>
      </S.FormContainer>
    </Layout>
  );
};

export default Form;
