import React, { useEffect, useContext } from 'react';
import firebase from 'firebase/app';
import Home from '../Home';
import styles from './App.module.css';
import { MenuProvider } from '../../context/MenuContext';
import { OrdersProvider } from '../../context/OrdersContext';
import FirebaseContext from '../../context/FirebaseContext';

function App() {
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    firebase.auth().signInAnonymously().then((x) => {
      console.log("Signed in");
    }, (err) => {
      console.log(err);
    }).catch(err => {
      console.log(err);
    });
  });

  return (
    <OrdersProvider>
    <MenuProvider>
      <main className={styles.layout}>
        <Home />
      </main>
    </MenuProvider>
    </OrdersProvider>
  );
};

export default App;
