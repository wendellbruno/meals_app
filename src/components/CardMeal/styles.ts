import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export const Container = styled.View`
  width: ${RFValue(152)}px;
  height: ${RFValue(190)}px;
  border-radius: ${RFValue(24)}px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.colorWhite};
`;

export const ContainerImage = styled.View`
  width: ${RFValue(120)}px;
  height: ${RFValue(120)}px;
  top: -${RFValue(60)}px;
  align-items: center;
  justify-content: center;
`;

export const ImageMeal = styled.Image`
  width: ${RFValue(120)}px;
  height: ${RFValue(120)}px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ContainerDetail = styled.View`
  height: ${RFValue(120)}px;
  padding: ${RFValue(5)}px;
  top: -${RFValue(60)}px;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: ${RFValue(5)}px;
`;

export const ContainerName = styled.View`
  width: 100%;
`;

export const NameMeal = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.colorRed};
  font-family: ${({ theme }) => theme.fonts.regular};
  text-align: center;
`;

export const ContainerDetailInfos = styled.View`
  flex-direction: row;
  gap: ${RFValue(6)}px;
  align-items: center;
  justify-content: center;
`;

export const IconCash = styled(MaterialCommunityIcons)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.colorRed};
`; //cash
export const IconTime = styled(MaterialCommunityIcons)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.colorRed};
`; // av-timer
export const IConRestaurante = styled(Ionicons)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.colorRed};
`; //restaurant
