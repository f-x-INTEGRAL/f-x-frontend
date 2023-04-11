import styled from '@emotion/styled';

export const MainTitle = styled.p<{ white?: boolean }>`
  font-size: 60px;

  color: ${(props) => (props.white ? '#FFF' : '#62A1F1')};
`;
