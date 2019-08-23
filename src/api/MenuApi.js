import firebase from 'firebase';

export const getMenu = () => {
  firebase.database().ref('/menu').on('value', snapshot => {
    console.log(snapshot.val());
  });
}
