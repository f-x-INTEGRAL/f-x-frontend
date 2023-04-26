import { Layout } from '@/components';
import styled from '@emotion/styled';
import axios from 'axios';
import { useEffect, useState } from 'react';

const DashboardWrapper = styled.div`
  width: 1000px;
  height: 1000px;
  margin: auto 0;
`;

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
`;

const DashboardTbody = styled.tbody`
  border-bottom: 2px solid #abaaaa;
`;

const DashboardTbodyTd = styled.td`
  padding: 15px 0 15px 15px;
  color: #abaaaa;
  font-size: 18px;
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

interface UserInfo {
  id: number;
  name: string;
  phoneNumber: string;
  quantity: string;
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
  const [paymentConfirm, setPaymentConfirm] = useState<boolean>(false);

  useEffect(() => {
    const getDatas = async () => {
      const data = await getUsers();
      console.log(data);
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
          <tr>
            <DashboardTbodyTd>1</DashboardTbodyTd>
            <DashboardTbodyTd>안기모</DashboardTbodyTd>
            <DashboardTbodyTd>01012345678</DashboardTbodyTd>
            <DashboardTbodyTd>4명</DashboardTbodyTd>
            <DashboardTbodyTd>
              {paymentConfirm ? '입금 완료' : '입금 대기'}
              <ConfirmButton
                onClick={() => setPaymentConfirm(!paymentConfirm)}
                style={{
                  color: paymentConfirm ? '#DF013A' : '#62a1f1',
                }}
              >
                {paymentConfirm ? 'X' : 'O'}
              </ConfirmButton>
            </DashboardTbodyTd>
          </tr>
        </DashboardTbody>
      </DashboardTable>
      {/* {users.map((user) => (
        <li key={user.id}>
          <p>{user.id}</p>
          <p>{user.name}</p>
          <p>{user.phoneNumber}</p>
          <p>{user.quantity}명</p>
        </li>
      ))} */}
    </Layout>
  );
};

export default adminMainPage;
