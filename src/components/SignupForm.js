import React, { createRef, useContext, useEffect } from 'react';
import Button from './reusable/Button';
import { AuthContext } from '../context';
import { SIGNUP_USER_FAIL } from '../reducers/types';
import { signupUser } from '../api';

const SignupForm = (props) => {
  const { state, dispatch } = useContext(AuthContext);

  const emailRef = createRef();
  const pass1Ref = createRef();
  const pass2Ref = createRef();

  const onRegister = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const pass1 = pass1Ref.current.value;
    const pass2 = pass2Ref.current.value;

    if(email && pass1 && pass2) {
      if(pass1 === pass2){
        signupUser(email, pass1, (val) => dispatch(val));
      } else {
        dispatch({type: SIGNUP_USER_FAIL, payload: "Unmatched password"});
      }
    }
  }

  return(
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
        ref={pass1Ref}
        defaultValue=""
      />
      <input
        name="password"
        placeholder="Password"
        type="password"
        ref={pass2Ref}
        defaultValue=""
      />
      <Button
        type="submit"
        value="register"
        text="Register"
        onClick={onRegister}
      />
    </form>
  );
};

export default SignupForm;
