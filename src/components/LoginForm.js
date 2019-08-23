import React, { createRef, useContext } from 'react';
import Button from './reusable/Button';
import { loginUser } from '../api';
import { AuthContext } from '../context';

const LoginForm = () => {
  const { state, dispatch } = useContext(AuthContext);
  const { error } = state;

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

  const renderError = () => {
    if(error) { return <p>{error}</p> };
  }

  return(
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
      </form>
      {renderError()}
    </>
  )
}

export default LoginForm;
