import React from 'react';
import styles from './Button.module.css';

const Button = ({type, value, style, text, onClick}) => {
  return (
    <button
      type={type}
      value={value}
      className={styles.button}
      style={style}
      onClick={onClick}>
      {text}
    </button>
  )
};

export default Button;
