import React from 'react';
import Button from '../reusable/Button';
import styles from './App.module.css';

function App() {
  return (
    <main className={styles.layout}>
      <p>Something</p>
      <Button type="submit" value="Add" text="OK" />
    </main>
  );
}

export default App;
