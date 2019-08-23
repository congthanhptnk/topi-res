import React, { useEffect, createRef, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import Button from './reusable/Button';
import SignupForm from './SignupForm';
import { AuthContext } from '../context';
import { loginUser, logout } from '../api/AuthApi';

const Login = (props) => {
  const { state, dispatch } = useContext(AuthContext);
  const { user, error } = state;

  const emailRef = createRef();
  const passRef = createRef();

  const onLogin = e => {
    e.preventDefault();

    if(emailRef.current.value && passRef.current.value) {
      loginUser(emailRef.current.value, passRef.current.value, (action) => {
        dispatch(action);
      });
    }
  }

  const onLogout = e => {
    e.preventDefault();

    logout(value => {
      dispatch(value);
    });
  }

  const renderError = () => {
    if(error) { return <p>{error}</p> };
  }

  useEffect(() => {
    if(user) { props.history.push('/home') }
  },[user, error])

  return (
    <>
    <form method="post">
      <input
        name="email"
        placeholder="Email"
        defaultValue=""
        ref={emailRef}
        type="email"
      />
      <input
        name="password"
        placeholder="Password"
        type="password"
        ref={passRef}
        defaultValue=""
      />
      <Button
        type="submit"
        value="login"
        text="Login"
        onClick={onLogin}
      />
      <Button
        type="submit"
        value="login"
        text="Logout"
        onClick={onLogout}
      />
    </form>
    {renderError()}
    <SignupForm />
    </>
  )
};

export default withRouter(Login);
