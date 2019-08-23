import React, { useEffect, useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import Login from '../Login';
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
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
          </Switch>
        </main>
      </MenuProvider>
    </OrdersProvider>
  );
};

export default App;
