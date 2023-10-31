import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  gap: ${RFValue(15)}px;
  justify-content: center;
  align-items: center;
`;

export const ContainerHeader = styled.View``;

export const HeaderDetail = styled.View`
  gap: ${RFValue(5)}px;
  justify-content: center;
`;

export const MealImage = styled.Image`
  width: ${RFValue(250)}px;
  height: ${RFValue(250)}px;
  border-radius: 50px;
`;

export const ContainerIcons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerDetailIcon = styled.View`
  gap: ${RFValue(6)}px;
  align-items: center;
  justify-content: center;
`;

export const TitleIcon = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.colorWhite};
  font-family: ${({ theme }) => theme.fonts.regular};
  text-align: center;
`;

export const IconCash = styled(MaterialCommunityIcons)`
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.colorWhite};
`; //cash
export const IconTime = styled(MaterialCommunityIcons)`
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.colorWhite};
`; // av-timer
export const IConRestaurante = styled(Ionicons)`
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.colorWhite};
`; //restaurant

export const ContainerInfos = styled.View`
  flex: 1;
  border: 1px solid black;
  border-top-right-radius: ${RFValue(25)}px;
  border-top-left-radius: ${RFValue(25)}px;
  background-color: ${({ theme }) => theme.colors.colorWhite};
  padding: ${RFValue(25)}px;
`;

export const TitleInfo = styled.Text`
  font-size: ${RFValue(25)}px;
`;

export const TextInfo = styled.Text``;
