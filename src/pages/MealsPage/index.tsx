import React from 'react';
import { ContainerBG, HeaderPages, CardMeal } from '../../components';
import { FlatList, View, TouchableOpacity } from 'react-native';
import { ParamListBase } from '@react-navigation/native';
import { DUMMY_MEALS } from '../../mock/MealsData';
import { ContainerTitle, IconTitle, ContainerList } from './styled';
import { useMealsProvider } from '../../context';
import { useNavigationHook } from '../../hooks';
export const MealsPage: React.FC = ({ route }: ParamListBase) => {

  const {handleChangeModal} = useMealsProvider();
  const {navigate} = useNavigationHook();



  //@ts-ignore
  const { categoryId, categoryName }: string = route?.params;

  const mealsByCategory = DUMMY_MEALS.filter(element =>
    element.categories.includes(categoryId),
  );

  return (
    <ContainerBG>
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
            <TouchableOpacity
            onPress={() =>navigate('MealDetailPage', {meal: item})}
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
