import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';


export const ContainerTitle = styled.View`
  padding: 15px;
`;
export const ContainerList = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.colorWhite};
`;
