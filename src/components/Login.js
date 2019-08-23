import React from 'react';
import Button from './reusable/Button';

const Login = () => {

  return (
    <form method="post">
      <input
        name="username"
        placeholder="Username"
        defaultValue=""
        type="text"
      />
      <input
        name="password"
        placeholder="Password"
        type="password"
        deafultValue=""
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
