import React, {createContext, useContext ,ReactNode, useState, useEffect} from 'react';
import { IMeal } from '../models';
import AsyncStorage from '@react-native-async-storage/async-storage';


type MealsContext = {
  favoritesMeals: IMeal[];
  handleAddFavoriteMeal: (meal: IMeal) => void;
  handleRemoveFavoriteMeal: (meal: IMeal) => void;
}

const MealsContext = createContext<MealsContext>({} as MealsContext);

const DBFAVORITESMEALS = '@DBFAVORITESMEALS';

type Props = {
  children: ReactNode
}
export const MealsProvider: React.FC<Props> = ({children}: Props) => {
  const [favoritesMeals, setFavoritesMeals] = useState<IMeal[]>([]);

  async function loadFavoritesMeal(){
    try{
      const response = await AsyncStorage.getItem(DBFAVORITESMEALS)
      if(response){
        const favoritesMealList = response? JSON.parse(response) : undefined;
        setFavoritesMeals(favoritesMealList);
        console.log('DB JÁ EXISTE');
      }else{
        AsyncStorage.setItem(DBFAVORITESMEALS, JSON.stringify([]))
        console.log('DB CRIADA');
      }
    }catch(erro){
      console.log('deu erro ao carregar favoritos')
    }
  }

  async function handleAddFavoriteMeal(meal: IMeal){
    try{
        setFavoritesMeals((element) => [...element, meal]);
       // console.log(favoritesMeals)
        await AsyncStorage.setItem(DBFAVORITESMEALS, JSON.stringify([...favoritesMeals, meal]));
    }catch(erro){
      console.log(erro)
    }
  }

  async function handleRemoveFavoriteMeal(meal: IMeal){
    try{
      const mealList = favoritesMeals.filter(element => element.id !== meal.id)
      await AsyncStorage.setItem(DBFAVORITESMEALS, JSON.stringify(mealList));
      loadFavoritesMeal();
    }catch(erro){
      console.log(erro)
    }
  }


  useEffect(() => {
    //AsyncStorage.removeItem(DBFAVORITESMEALS);
    loadFavoritesMeal()
  },[])

  return (
    <MealsContext.Provider
    value={{
      favoritesMeals,
      handleAddFavoriteMeal,
      handleRemoveFavoriteMeal
    }}
    >
      {children}
    </MealsContext.Provider>
  );
}

export const useMealsProvider = () => {
  const mealsProvider = useContext(MealsContext);
  return mealsProvider
}
