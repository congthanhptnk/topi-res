import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return(
    <div className={styles.header}>
      <Link to='/home' className={styles.title}>{props.title}</Link>
      {props.children}
    </div>
  );
};

export default Header;
