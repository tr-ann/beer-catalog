/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import DetailsPage from './pages/details/components/DetailsPage/DetailsPage';
import FavoritesPage from './pages/favorites/components/FavoritesPage/FavoritesPage';
import Landing from './pages/home/components/Landing/Landing';
import LoginPage from './pages/login/LoginPage';
import ROUTES from './shared/constants/paths/paths';
import './App.scss';

const App = () => {
  const { home, details, favorites, login } = ROUTES;

  const isAuthenticated = () => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    return Boolean(user);
  };

  return (
    <Switch>
      <Route path={login.url} exact component={LoginPage} />
      <Route
        path={home.url}
        exact
        render={(props) => {
          return isAuthenticated() ? <Landing {...props} /> : <Redirect to={login.url} />;
        }}
      />
      <Route
        path={details.url}
        render={(props) => {
          return isAuthenticated() ? <DetailsPage {...props} /> : <Redirect to={login.url} />;
        }}
      />
      <Route
        path={favorites.url}
        exact
        render={(props) => {
          return isAuthenticated() ? <FavoritesPage {...props} /> : <Redirect to={login.url} />;
        }}
      />
      <Redirect to={home.url} />
    </Switch>
  );
};

export default App;
