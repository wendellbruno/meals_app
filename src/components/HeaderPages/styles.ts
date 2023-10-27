import styled from 'styled-components/native';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: ${RFValue(15)}px;
`;

export const IconBackButton = styled(FontAwesome5)`
 font-size: ${RFValue(24)}px;
 color: ${({ theme }) => theme.colors.colorWhite};
`;

export const IconFavoriteButton = styled(AntDesign)`
 font-size: ${RFValue(24)}px;
 color: ${({ theme }) => theme.colors.colorWhite};
`;

export const TitlePage = styled.Text`
  color: ${({ theme }) => theme.colors.colorWhite};
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

`;
