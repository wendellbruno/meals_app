import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`

`;

export const ContainerInfos = styled.View`
  flex: 1;
  border-top-right-radius: ${RFValue(25)}px;
  border-top-left-radius: ${RFValue(25)}px;
  background-color: ${({ theme }) => theme.colors.colorWhite};
  padding: ${RFValue(25)}px;
`;

export const TitleInfo = styled.Text`
font-size: ${RFValue(25)}px;
`;

export const TextInfo = styled.Text``;
