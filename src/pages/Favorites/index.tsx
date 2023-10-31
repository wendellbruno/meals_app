import React from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';
import { ContainerBG, HeaderPages, CardMeal } from '../../components';
import { useMealsProvider } from '../../context';
import { useNavigationHook } from '../../hooks';

import { ContainerList, ContainerTitle, IconTitle, Title } from './styles';

export const Favorites: React.FC = () => {
  const { favoritesMeals } = useMealsProvider();
  const { navigate } = useNavigationHook();
  return (
    <ContainerBG>
      <HeaderPages titlePage="Favoritos" />
      <ContainerList>
        <FlatList
          ListHeaderComponent={() => (
            <ContainerTitle>
              <IconTitle name="chef-hat" />
            </ContainerTitle>
          )}
          ListHeaderComponentStyle={{
            marginBottom: 60,
          }}

          showsVerticalScrollIndicator={false}
          data={favoritesMeals}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigate('MealDetailPage', { meal: item })}
            >
              <CardMeal meals={item} />
            </TouchableOpacity>
          )}
          horizontal={false}
          numColumns={2}
          columnWrapperStyle={{
            gap: 30,
          }}
          ItemSeparatorComponent={() => <View style={{ height: 80 }} />}
        />
      </ContainerList>
    </ContainerBG>
  );
};
