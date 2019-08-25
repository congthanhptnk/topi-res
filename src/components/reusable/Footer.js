import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return(
    <div className={styles.footerContainer}>
      <a href="https://github.com/congthanhptnk/topi-res/tree/development" className={styles.tag} >GitHub</a>
      <a href="https://www.linkedin.com/in/thanh-tran-1804/" className={styles.tag}>LinkedIn</a>
    </div>
  );
}

export default Footer;
