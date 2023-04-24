import { Layout } from '@/components';
import styled from '@emotion/styled';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const DashboardWrapper = styled.div`
  width: 1000px;
  height: 1000px;
  margin: auto 0;
`;

export const DashboardTable = styled.table``;
export const DashboardTr = styled.tr``;
export const DashboardTh = styled.th``;

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
      'https://fx.ggos3.xyz/admin/find-all'
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const adminMainPage = () => {
  const [users, setUsers] = useState<UserInfo[]>([]);

  useEffect(() => {
    const getDatas = async () => {
      const data = await getUsers();
      setUsers(data);
    };
    getDatas();
  }, []);

  return (
    <Layout>
      {users.map((user) => (
        <li key={user.id}>
          <p>{user.id}</p>
          <p>{user.name}</p>
          <p>{user.phoneNumber}</p>
          <p>{user.quantity}명</p>
          <p>{user.status}</p>
        </li>
      ))}
    </Layout>
  );
};

export default adminMainPage;
