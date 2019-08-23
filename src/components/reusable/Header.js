import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = ({ title }) => {
  return(
    <div className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <h1 className={styles.title}>{title}</h1>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Header;
