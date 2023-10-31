import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigationHook } from '../../hooks';
import { useMealsProvider } from '../../context';

import {
  Container,
  IconBackButton,
  IconFavoriteButton,
  TitlePage,
} from './styles';
import { IMeal } from '../../models';

type Props = {
  titlePage: string;
  favoriteIcon?: boolean;
  meal?: IMeal;
};

export const HeaderPages: React.FC<Props> = ({
  titlePage,
  meal,
  favoriteIcon = false,
}: Props) => {
  const { goBack } = useNavigationHook();
  const { handleAddFavoriteMeal, handleRemoveFavoriteMeal, favoritesMeals } = useMealsProvider();


  const mealFavorited = favoritesMeals ? favoritesMeals.filter(item => item.id === meal?.id) : []

  return (
    <Container>
      <TouchableOpacity onPress={() => goBack()}>
        <IconBackButton name="arrow-left" />
      </TouchableOpacity>
      <TitlePage>{titlePage}</TitlePage>
      {
        favoriteIcon && mealFavorited.length > 0 ? (
          <TouchableOpacity onPress={() => handleRemoveFavoriteMeal(meal)}>
            <IconFavoriteButton name="star" />
          </TouchableOpacity>
        ) : (
          favoriteIcon ? (
          <TouchableOpacity onPress={() => handleAddFavoriteMeal(meal)}>
            <IconFavoriteButton name="staro" />
          </TouchableOpacity>
          ):(
            <View style={{width: 24}} />
          )
        )
      }
    </Container>
  );
};


{/* <TouchableOpacity onPress={() => handleAddFavoriteMeal(meal)}>
            <IconFavoriteButton name="star" />
          </TouchableOpacity> */}
