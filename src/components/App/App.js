import React, { useEffect, useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import Login from '../Login';
import History from '../History';
import PrivateRoute from '../PrivateRoute';
import styles from './App.module.css';
import {
  MenuProvider,
  OrdersProvider,
  AuthContext,
  FirebaseContext
} from '../../context';
import { LOGIN_USER_SUCCESS } from '../../reducers/types';

function App() {
  const firebase = useContext(FirebaseContext);
  const dispatch = useContext(AuthContext).dispatch;

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if(user){
        console.log(user);
        dispatch({type: LOGIN_USER_SUCCESS, payload: user})
      }
    })
    return () => unsubscribe();
  }, [dispatch, firebase]);

  return (
    <OrdersProvider>
      <MenuProvider>
        <main className={styles.layout}>
          <Switch>
            <PrivateRoute path='/home' component={Home} />
            //<Route exact path='/home' component={Home} />
            <PrivateRoute path='/history' component={History} />
            <Route path='/' component={Login} />
          </Switch>
        </main>
      </MenuProvider>
    </OrdersProvider>
  );
};

export default App;
