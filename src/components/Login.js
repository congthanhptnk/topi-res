import React from 'react';
import Button from './reusable/Button';

const Login = () => {
  const onLogin = (e) => {
    e.preventDefault();
    console.log("yeeeha");
  }

  return (
    <form onSubmit={onLogin} method="post">
      <input
        name="email"
        placeholder="Email"
        defaultValue=""
        type="email"
      />
      <input
        name="password"
        placeholder="Password"
        type="password"
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
