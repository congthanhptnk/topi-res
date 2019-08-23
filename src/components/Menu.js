import React, { useEffect, useContext } from 'react';
import FoodOption from './FoodOption';
import FoodItem from '../models/FoodItem';
import styles from './Menu.module.css';
import MenuContext from '../context/MenuContext';
import { getMenu } from '../api';
import {
  GET_MENU
} from '../reducers/types';

const Menu = () => {
  const { state, dispatch } = useContext(MenuContext);

  useEffect(() => {
    getMenu(menu => {
      dispatch({type: GET_MENU, payload: menu});
    })
  }, []);

  const renderMenu = () => {
    return state.menu.map(foodItem => {
      return(
        <FoodOption
          key={foodItem.key}
          foodItem={foodItem}
        />
      );
    });
  };

  return(
    <div className={styles.menu}>
      {renderMenu()}
    </div>
  )
};

export default Menu;
