import React, { createRef, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import styles from './SignupForm.module.css';
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
    <div>
      <Form className={styles.container}>
        <h1 className={styles.signupTitle}> Sign Up </h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" ref={emailRef}/>
          <Form.Text className="text-muted">
            Email must contain 6 characters
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={pass1Ref}/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Please re-enter your password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={pass2Ref}/>
        </Form.Group>

        <Button type="submit" text="Sign Up" onClick={onRegister}/>
      </Form>
    </div>
  );
};

export default SignupForm;
