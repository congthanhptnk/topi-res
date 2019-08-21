import React from 'react';
import styles from './Header.module.css'

const Header = ({ title }) => {
  return(
    <div className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default Header;
