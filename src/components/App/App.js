import React from 'react';
import Home from '../Home';
import styles from './App.module.css';
import { MenuProvider } from '../../context/MenuContext';

function App() {
  return (
    <MenuProvider>
    <main className={styles.layout}>
      <Home />
    </main>
    </MenuProvider>
  );
};

export default App;
