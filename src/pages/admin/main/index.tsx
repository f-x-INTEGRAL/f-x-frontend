import { Layout } from '@/components';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import axios from 'axios';
import React, { MouseEventHandler } from 'react';
import { useEffect, useState } from 'react';

const DashboardTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  margin-top: 50px;
`;
const DashboardThead = styled.thead`
  background-color: #b8d7ff;
`;
const DashboardTheadTh = styled.th`
  padding: 15px 0 15px 15px;
  color: #abaaaa;
  font-size: 19px;
  font-weight: 400;

  @media (max-width: 768px) {
    writing-mode: horizontal-tb;
    white-space: nowrap;
  }
`;
const DashboardTbody = styled.tbody`
  border-bottom: 2px solid #abaaaa;
`;
const DashboardTbodyTd = styled.td`
  padding: 15px 0 15px 15px;
  color: #abaaaa;
  font-size: 18px;

  @media (max-width: 768px) {
    writing-mode: horizontal-tb;
    white-space: nowrap;
  }
`;
const ConfirmButton = styled.button`
  margin-left: 10px;
  width: 25px;
  height: 25px;
  font-size: 16px;
  background: none;
  border: 1px solid #62a1f1;
  box-shadow: 1px 1px 5px #62a1f1;
  border-radius: 30%;
  &:hover {
    background-color: #b8d7ff;
    transition: 0.3s;
  }
  cursor: pointer;
`;

const DeleteButton = styled.button`
  margin-left: 150px;
  width: 50px;
  height: 25px;
  font-size: 16px;
  background: none;
  border: 1px solid #b40404;
  box-shadow: 1px 1px 5px #b40404;
  border-radius: 5px;
  color: #b40404;
  &:hover {
    background-color: #f78181;
    transition: 0.3s;
  }
  cursor: pointer;
  @media (max-width: 768px) {
    margin-left: 35px;
  }
`;

interface UserInfo {
  id: number;
  name: string;
  phoneNumber: string;
  quantity: string;
  status: string;
}
const getUsers = async (): Promise<UserInfo[]> => {
  try {
    const res = await axios.get<UserInfo[]>(
      'https://fx.ggos3.xyz/admin/find-all',
      {
        withCredentials: true,
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
const adminMainPage = () => {
  const [users, setUsers] = useState<UserInfo[]>([]);

  const onClickUpdateStatus = async (id: number) => {
    const newStatus =
      users.find((user) => user.id === id)?.status === 'WAITING'
        ? 'CONFORMED'
        : 'WAITING';
    await axios.patch(
      `https://fx.ggos3.xyz/admin/update/${id}`,
      { status: newStatus },
      {
        withCredentials: true,
      }
    );
    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          status: newStatus,
        };
      } else {
        return user;
      }
    });
    setUsers(updatedUsers);
  };

  const onClickDeleteUser = async (
    e: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    const idToDelete = Number(e.currentTarget.dataset.id);
    await axios.delete(`https://fx.ggos3.xyz/admin/delete/${idToDelete}`, {
      withCredentials: true,
    });
    setUsers(users.filter((user) => user.id !== idToDelete));
  };

  useEffect(() => {
    const getDatas = async () => {
      const data = await getUsers();
      setUsers(data);
    };
    getDatas();
  }, []);

  return (
    <Layout>
      <DashboardTable>
        <DashboardThead>
          <tr>
            <DashboardTheadTh>ID</DashboardTheadTh>
            <DashboardTheadTh>이름</DashboardTheadTh>
            <DashboardTheadTh>전화번호</DashboardTheadTh>
            <DashboardTheadTh>인원</DashboardTheadTh>
            <DashboardTheadTh>입금확인</DashboardTheadTh>
          </tr>
        </DashboardThead>
        <DashboardTbody>
          {users.map((user) => (
            <tr
              css={css`
                background-color: white;
                border-bottom: 1px solid #000;
              `}
            >
              <DashboardTbodyTd>{user.id}</DashboardTbodyTd>
              <DashboardTbodyTd>{user.name}</DashboardTbodyTd>
              <DashboardTbodyTd>{user.phoneNumber}</DashboardTbodyTd>
              <DashboardTbodyTd>{user.quantity}</DashboardTbodyTd>
              <DashboardTbodyTd>
                {user.status === 'CONFORMED' ? '입금 완료' : '입금 대기'}
                <ConfirmButton
                  onClick={() => onClickUpdateStatus(user.id)}
                  data-id={user.id}
                  style={{
                    color: user.status === 'CONFORMED' ? '#62a1f1' : '#DF013A',
                    border:
                      user.status === 'CONFORMED'
                        ? '1px solid #62a1f1'
                        : '1px solid #DF013A',
                  }}
                >
                  {user.status === 'CONFORMED' ? 'O' : 'X'}
                </ConfirmButton>
                <DeleteButton onClick={onClickDeleteUser} data-id={user.id}>
                  삭제
                </DeleteButton>
              </DashboardTbodyTd>
            </tr>
          ))}
        </DashboardTbody>
      </DashboardTable>
    </Layout>
  );
};
export default adminMainPage;
