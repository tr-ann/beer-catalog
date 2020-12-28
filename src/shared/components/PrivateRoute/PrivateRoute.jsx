import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import ROUTES from '../../constants/paths/paths';

const PrivateRoute = ({ component, path, exact }) => {
  const { login } = ROUTES;

  const isAuthenticated = () => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    return Boolean(user);
  };

  return isAuthenticated() ? (
    <Route component={component} path={path} exact={exact} />
  ) : (
    <Redirect to={login.url} />
  );
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

PrivateRoute.defaultProps = {
  exact: false,
};
