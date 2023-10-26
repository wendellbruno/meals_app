import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
export const ContainerTitle = styled.View`

`;
export const ContainerList = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(40)}px;
  color: ${({ theme }) => theme.colors.colorWhite};
`;
