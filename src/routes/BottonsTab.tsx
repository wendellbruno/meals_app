import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Favorites } from '../pages';
import {AntDesign, Ionicons} from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

const Tab = createBottomTabNavigator();

export const BottonsTab: React.FC = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: theme.colors.iconColor,
      tabBarInactiveTintColor: theme.colors.iconColor
    }}

    >
      <Tab.Screen
      name="HomeTab"
      component={Home}
      options={{
        tabBarIcon: ({focused, color, size}) => {
          if(focused){
            return <Ionicons name="restaurant" color={color} size={size} />;
          }
          return <Ionicons name="restaurant-outline" color={color} size={size} />;
        }
      }}
      />
      <Tab.Screen
      name="Favorites"
      component={Favorites}
      options={{
            tabBarIcon: ({ focused, color, size }) => {
              if (focused) {
                return <AntDesign name="star" color={color} size={size} />;
              }
              return <AntDesign name="staro" color={color} size={size} />;
            },
          }}
      />
    </Tab.Navigator>
  );
}
