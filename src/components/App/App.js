import React, { useEffect } from 'react';
import firebase from 'firebase/app';
import Home from '../Home';
import styles from './App.module.css';
import { MenuProvider } from '../../context/MenuContext';
import { FirebaseProvider } from '../../context/FirebaseContext';

function App() {
  const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: "",
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
  };

  useEffect(() => {
    firebase.initializeApp(config);
    firebase.auth().signInAnonymously().then((x) => {
      console.log(x);
    }, (err) => {
      console.log(err);
    }).catch(err => {
      console.log(err);
    });
  }, [config]);

  return (
    <FirebaseProvider>
    <MenuProvider>
      <main className={styles.layout}>
        <Home />
      </main>
    </MenuProvider>
    </FirebaseProvider>
  );
};

export default App;
