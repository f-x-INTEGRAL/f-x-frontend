import styled from '@emotion/styled';

export const MainTitle = styled.p<{ white?: boolean; x45?: boolean }>`
  font-size: ${(props) => (props.x45 ? '45px' : '60px')};

  color: ${(props) => (props.white ? '#FFF' : '#62A1F1')};
`;
