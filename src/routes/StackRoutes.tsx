import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {MealsPage, MealDetailPage} from '../pages';
import { BottonsTab } from './BottonsTab';

const Stack = createStackNavigator();
export const StackRoutes: React.FC = () => {
  return (
    <Stack.Navigator
    initialRouteName='Home'
    screenOptions={{
      headerShown: false
    }}
    >
      <Stack.Screen name="Home" component={BottonsTab} />
      <Stack.Screen name="MealsPage" component={MealsPage} />
      <Stack.Screen name="MealDetailPage" component={MealDetailPage} />
    </Stack.Navigator>
  );
}
