import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  z-index: -1;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: center;
`;
