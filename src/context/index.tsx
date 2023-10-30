import React, {createContext, useContext ,ReactNode, useState} from 'react';
import { IMeal } from '../models';


type MealsContext = {
  mealSelected: IMeal;
  modal: boolean;
  handleChangeModal: (meal: IMeal) => void;
}

export const MealsContext = createContext<MealsContext>({} as MealsContext);

  const [mealSelected, setMealSelected] = useState<IMeal>({} as IMeal);
  const [modal, setModal] = useState<boolean>(false);


  function handleChangeModal(meal: IMeal){
    if(modal){
      setModal(!modal);
      setMealSelected({} as IMeal)
    }else{
      setModal(!modal);
      setMealSelected(meal);
    }
  }


type Props = {
  children: ReactNode
}
export const MealsProvider: React.FC<Props> = ({children}: Props) => {
  return (
    <MealsContext.Provider
    value={{
      mealSelected,
      modal,
      handleChangeModal
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
