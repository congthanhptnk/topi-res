import React from 'react';
import Home from '../Home';
import styles from './App.module.css';
import { MenuProvider } from '../../store/MenuContext';

function App() {
  return (
    <main className={styles.layout}>
      <Home />
    </main>
  );
};

export default App;
