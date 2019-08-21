import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return(
    <div className={styles.footerContainer}>
      <h1 className={styles.title}>Twitter</h1>
      <h1 className={styles.title}>LinkedIn</h1>
      <h1 className={styles.title}>Facebook</h1>
    </div>
  );
}

export default Footer;
