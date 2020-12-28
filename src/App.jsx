/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './shared/components/PrivateRoute/PrivateRoute';
import DetailsPage from './pages/details/components/DetailsPage/DetailsPage';
import FavoritesPage from './pages/favorites/components/FavoritesPage/FavoritesPage';
import Landing from './pages/home/components/Landing/Landing';
import LoginPage from './pages/login/LoginPage';
import ROUTES from './shared/constants/paths/paths';
import './App.scss';

const App = () => {
  const { home, details, favorites, login } = ROUTES;

  return (
    <Switch>
      <Route path={login.url} exact component={LoginPage} />
      <PrivateRoute path={home.url} exact component={Landing} />
      <PrivateRoute path={details.url} component={DetailsPage} />
      <PrivateRoute path={favorites.url} exact component={FavoritesPage} />
      <Redirect to={home.url} />
    </Switch>
  );
};

export default App;
