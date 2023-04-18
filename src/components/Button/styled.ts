import styled from '@emotion/styled';

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: left;
  width: 500px;
  height: auto;
  margin-top: 55px;
`;

export const Button = styled.button`
  margin: 0;
  font-size: 35px;
  color: #ffffff;
  background-color: #62a1f1;
  border: none;
  border-radius: 12px;
  width: 120px;
  height: 50px;

  &:hover {
    box-shadow: inset 0 0px 10px rgba(0, 0, 0, 0.4);
  }

  cursor: pointer;
`;

export const TextWrapper = styled.div`
  padding-top: 20px;
  padding-left: 10px;
  margin-bottom: 20px;
  height: auto;
  margin: 0;
`;

export const TextBox = styled.text<{ black?: boolean }>`
  color: ${(props) => (props.black ? '#000' : '#abaaaa')};
  font-size: 20px;
`;
