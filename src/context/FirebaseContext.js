import React from 'react';
import FirebaseReducer, { authInitialState } from '../reducers/AuthReducer';

const FirebaseContext = React.createContext();

const FirebaseProvider = (props) => {
  const [state, dispatch] = React.useReducer(FirebaseReducer, authInitialState);
  const value = {state, dispatch};

  return <FirebaseContext.Provider value={value}>{props.children}</FirebaseContext.Provider>;
}

const FirebaseConsumer = FirebaseContext.Consumer;

export { FirebaseConsumer, FirebaseProvider };
export default FirebaseContext;
