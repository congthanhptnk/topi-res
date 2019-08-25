import React, { useContext } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import styles from './Login.module.css';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import { AuthContext } from '../context';

const Login = (props) => {
  const { user } = useContext(AuthContext).state;

  return (
    <>
    {(user!=null) ? (
      <Redirect to='/home' />
    ) : (
      <div className={styles.mainBody}>
        <LoginForm className={styles.login}/>
        <SignupForm className={styles.signup}/>
      </div>
    )};
    </>
  )
};

export default withRouter(Login);
