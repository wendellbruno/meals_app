import React from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';
import { Categories, ContainerBG } from '../../components';
import { DUMMY_CATEGORIES } from '../../mock/CategoryData';
import { Title, IconTitle, ContainerTitle, ContainerList } from './styles';
import { useNavigationHook } from '../../hooks';

export const Home: React.FC = () => {
  const {navigate} = useNavigationHook();
  return (
    <ContainerBG>
      <ContainerList>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={DUMMY_CATEGORIES}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={() => (
            <ContainerTitle>
              <IconTitle name="chef-hat" />
              <Title>Escolha uma categoria</Title>
            </ContainerTitle>
          )}
          ItemSeparatorComponent={() => (
            <View style={{ height: 5, width: 5 }} />
          )}
          renderItem={({ item }) => (
            <TouchableOpacity
            onPress={ () => navigate('MealsPage', {categoryId: item.id, categoryName: item.title})}
            >
              <Categories category={item} />
            </TouchableOpacity>
          )}
          horizontal={false}
          numColumns={2}
          columnWrapperStyle={{
            gap: 50,
          }}
        />
      </ContainerList>
    </ContainerBG>
  );
};
