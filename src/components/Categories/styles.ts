import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: ${RFValue(130)}px;
  height: ${RFValue(110)}px;
  padding: ${RFValue(10)}px;
  border-radius: ${RFValue(24)}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.colorWhite};
`;

export const TitleCategory = styled.Text`
  color: ${({ theme }) => theme.colors.colorRed};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
