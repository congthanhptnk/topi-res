import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
  return (
    <button type={props.type} value={props.value} className={styles.button} style={props.style} >
      {props.text}
    </button>
  )
};

export default Button;
