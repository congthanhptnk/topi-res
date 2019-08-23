import React, { useEffect, createRef, useContext } from 'react';
import Button from './reusable/Button';
import AuthContext from '../context/AuthContext';
import { loginUser } from '../api/AuthApi';
import { EMAIL_CHANGED, PASSWORD_CHANGED } from '../reducers/types';

const Login = () => {
  const { state, dispatch } = useContext(AuthContext);

  const emailRef = createRef();
  const passRef = createRef();

  const onLogin = e => {
    e.preventDefault();
    console.log(state);

    if(emailRef.current.value && passRef.current.value) {
      loginUser(emailRef.current.value, passRef.current.value, (action) => {
        dispatch(action);
      });
    }
  }

  // useEffect(() => {
  //   dispatch({type: EMAIL_CHANGED, payload: emailRef.current.value});
  // },[dispatch, emailRef])
  //
  // useEffect(() => {
  //   dispatch({type: PASSWORD_CHANGED, payload: passRef.current.value});
  // },[dispatch, passRef])

  return (
    <form onSubmit={onLogin} method="post">
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
      />
    </form>
  )
};

export default Login;
