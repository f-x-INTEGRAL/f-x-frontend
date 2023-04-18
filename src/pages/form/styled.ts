import styled from '@emotion/styled';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  float: left;
`;

export const FormContainer = styled.div`
  padding-top: 200px;
`;

export const FormTitle = styled.h1`
  display: flex;

  :before {
    content: '↳';
    color: #abaaaa;
    font-size: 20px;
    font-weight: 400;
  }
  :after {
    content: '+';
    color: #abaaaa;
    font-size: 30px;
    font-weight: 400;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  float: left;

  margin-top: 5%;
`;

export const FormItems = styled.div`
  float: left;
  width: 54%;
`;

export const ScrollUpButton = styled.button`
  margin-top: 10px;
  background-color: #b8d7ff;
  border: none;
  border-radius: 5px;
  width: 80px;
  height: 30px;
  color: #fff;
  font-size: 15px;
  text-align: center;
  line-height: 30px;

  cursor: pointer;

  &:hover {
    color: black;
    background-color: #62a1f1;
    transition: 0.5s;
  }
`;
