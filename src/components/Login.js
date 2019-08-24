import React, { useContext } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
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
      <>
        <LoginForm/>
        <SignupForm/>
      </>
    )};
    </>
  )
};

export default withRouter(Login);
