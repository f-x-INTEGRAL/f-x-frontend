import styled from '@emotion/styled';

export const InputWrapper = styled.div`
  margin-top: 100px;
  border-bottom: 4px solid #abaaaa;
  width: 500px;
  padding-bottom: 10px;
  height: auto;
`;

export const InputText = styled.input`
  width: 500px;
  color: #abaaaa;
  font-size: 35px;
  font-weight: 550;
  border: none;
  text-align: left;
  &:focus {
    outline: none;
    color: #000000;
  }
`;

export const InputErrorText = styled.span`
  color: red;
  font-size: 15px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
