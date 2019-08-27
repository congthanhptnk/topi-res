import React, { createRef, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import styles from './LoginForm.module.css';
import Button from './reusable/Button';
import { loginUser } from '../api';
import { AuthContext } from '../context';

const LoginForm = () => {
  const { state, dispatch } = useContext(AuthContext);
  const { loginError } = state;

  const emailRef = createRef();
  const passRef = createRef();

  const onLogin = e => {
    e.preventDefault();
    if(emailRef.current.value && passRef.current.value) {
      loginUser(emailRef.current.value, passRef.current.value, (action) => {
        dispatch(action);
      });
    }
    emailRef.current.value = ``;
    passRef.current.value = ``;
  }

  const renderLoginError = () => {
    if(loginError) { return <Form.Label className={styles.error}>{loginError}</Form.Label> };
  }

  return(
    <div>
      <Form className={styles.container}>
        <h1 className={styles.loginTitle}> Sign In </h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className={styles.label}>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" ref={emailRef}/>
          <Form.Text className="text-muted">
            Email must contain 6 characters
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className={styles.label}>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={passRef}/>
        </Form.Group>
        {renderLoginError()}
        <Button style={{fontWeight: 'bold'}} type="submit" text="Login" onClick={onLogin}/>
      </Form>
    </div>
  )
}

export default LoginForm;
