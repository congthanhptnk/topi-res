import React from 'react';
import AuthReducer, { authInitialState } from '../reducers/AuthReducer';

const AuthContext = React.createContext();

const AuthProvider = (props) => {
  const [state, dispatch] = React.useReducer(AuthReducer, authInitialState);
  const value = {state, dispatch};

  return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>;
}

const AuthConsumer = AuthContext.Consumer;
export {AuthProvider, AuthConsumer};
export default AuthContext;
