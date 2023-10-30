import React from 'react';
import { ContainerBG, HeaderPages, CardMeal, MealDetailModal } from '../../components';
import { FlatList, View } from 'react-native';
import { ParamListBase } from '@react-navigation/native';
import { DUMMY_MEALS } from '../../mock/MealsData';
import { ContainerTitle, IconTitle, ContainerList } from './styled';
import { IMeal } from '../../models';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const MealsPage: React.FC = ({ route }: ParamListBase) => {
  //@ts-ignore
  const { categoryId, categoryName }: string = route?.params;

  const mealsByCategory = DUMMY_MEALS.filter(element =>
    element.categories.includes(categoryId),
  );

  return (
    <ContainerBG>
      <MealDetailModal />
      <HeaderPages titlePage={categoryName} />
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
          data={mealsByCategory}
          renderItem={({ item }) => (
            <TouchableOpacity>
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
