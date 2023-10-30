import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export const Container = styled.View`

`;

export const ContainerTitle = styled.View`
  padding: ${RFValue(15)}px;
  align-items: center;
`;

export const IconTitle = styled(MaterialCommunityIcons)`
  color: ${({ theme }) => theme.colors.colorWhite};
  font-size: ${RFValue(80)}px;
`;

export const ContainerList = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
