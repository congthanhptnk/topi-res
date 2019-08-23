import React, { useEffect, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import { AuthContext } from '../context';

const Login = (props) => {
  const { user } = useContext(AuthContext).state;

  useEffect(() => {
    if(user) { props.history.push('/home') }
  })

  return (
    <>
      <LoginForm />
      <SignupForm />
    </>
  )
};

export default withRouter(Login);
