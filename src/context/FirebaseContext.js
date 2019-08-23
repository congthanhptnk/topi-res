import React from 'react';
import firebase from 'firebase/app';
import FirebaseReducer, { authInitialState } from '../reducers/AuthReducer';

const FirebaseContext = React.createContext();

const FirebaseProvider = (props) => {
  const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: "",
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
  };

  firebase.initializeApp(config);

  return <FirebaseContext.Provider value={firebase}>{props.children}</FirebaseContext.Provider>;
}

const FirebaseConsumer = FirebaseContext.Consumer;

export { FirebaseConsumer, FirebaseProvider };
export default FirebaseContext;
