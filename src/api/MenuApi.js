import firebase from 'firebase';
import FoodItem from '../models/FoodItem';

export const getMenu = (cb) => {
  firebase.database().ref('/menu').on('value', snapshot => {
    cb(snapToArr(snapshot));
  }, err => {
    console.log(err);
  })
}

const snapToArr = (snapshot) => {
  let menu = []
  snapshot.forEach(item => {
    const { name, price, ingredients } = item.val();
    let newFood = new FoodItem(name, price, ingredients, item.key);
    newFood.key = item.key;
    menu.push(newFood);
  })

  return menu;
}
