import React, { NextPage } from 'next';
import Image from 'next/image';
import Symbol from '../../../assets/images/Symbol.png';
import { Input, Layout, MainTitle, Button } from '@/components';
import { useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';

export const EntryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 100px;
`;

const adminEntryPage: NextPage = () => {
  const [adminPass, setAdminPass] = useState('');

  const onChangeAdminPass = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdminPass(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'https://fx.ggos3.xyz/admin/login',
        {
          password: adminPass,
        },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Layout>
      <EntryWrapper>
        <form onSubmit={handleSubmit}>
          <Image src={Symbol} alt="admin_entry_logo"></Image>
          <MainTitle
            x45
            title={' "ADMIN에 접근하시려면 PASSWORD를 입력하세요.'}
          />
          <Input
            type="password"
            value={adminPass}
            onChange={onChangeAdminPass}
            placeholder="Writing admin password..."
          />
          <Button text="OK" type="submit" />
        </form>
      </EntryWrapper>
    </Layout>
  );
};

export default adminEntryPage;
