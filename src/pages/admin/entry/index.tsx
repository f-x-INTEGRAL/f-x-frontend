import React, { NextPage } from 'next';
import Image from 'next/image';
import { Input, Layout, MainTitle, Button } from '@/components';
import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import styled from '@emotion/styled';
import Symbol from '../../../assets/images/Symbol.png';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';

export const EntryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 100px;
`;

const adminEntryPage: NextPage = () => {
  const [adminPass, setAdminPass] = useState('');
  const [cookies, setCookie] = useCookies(['loginCookie']);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response: AxiosResponse<any, any> | void = await axios.post(
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
      if (response) {
        const setCookieHeader = response.headers['set-cookie'];
        if (setCookieHeader) {
          const cookieString = setCookieHeader.join(';');
          setCookie('loginCookie', cookieString, {
            path: '/',
            secure: true,
          });
          console.log(response);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onChangeAdminPass = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdminPass(e.target.value);
  };

  const router = useRouter();
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
          <Button
            text="OK"
            type="submit"
            onClick={() => router.push('/admin/main')}
          />
        </form>
      </EntryWrapper>
    </Layout>
  );
};

export default adminEntryPage;
