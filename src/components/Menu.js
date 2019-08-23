import React, { useEffect, useContext } from 'react';
import styles from './Menu.module.css';
import placeholder from '../assets/icons/placeholderMenu.svg';
import FoodOption from './FoodOption';
import { MenuContext } from '../context';
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
    if(state.menu.length > 0) {
      return state.menu.map(foodItem => {
        return(
          <FoodOption
            key={foodItem.key}
            foodItem={foodItem}
          />
        );
      });
    } else {
      return (<img src={placeholder} alt="Menu" />);
    }
  };

  return(
    <div className={styles.menu}>
      {renderMenu()}
    </div>
  )
};

export default Menu;
