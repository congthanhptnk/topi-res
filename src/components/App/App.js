import React from 'react';
import Button from '../reusable/Button';
import Header from '../reusable/Header';
import styles from './App.module.css';

function App() {
  return (
    <main className={styles.layout}>
      <Header title="Header"/>
      <Button type="submit" value="Add" text="OK" />
    </main>
  );
}

export default App;
