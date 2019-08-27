import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { state } = React.useContext(AuthContext);

  return (
    <Route {...rest} render={(props) => (
      state.user != null
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )
};

export default PrivateRoute;
