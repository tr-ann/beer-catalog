import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './shared/components/PrivateRoute/PrivateRoute';
import DetailsPage from './pages/details/components/DetailsPage/DetailsPage';
import FavoritesPage from './pages/favorites/components/FavoritesPage/FavoritesPage';
import Landing from './pages/home/components/Landing/Landing';
import ROUTES from './shared/constants/paths/paths';
import './App.scss';
import RegistrationPage from './pages/auth/RegistrationPage/RegistrationPage';
import LoginPageContainer from './pages/auth/LoginPage/LoginPageContainer';
import UserProfilePage from './pages/user/components/UserProfilePage/UserProfilePage';

const App = () => {
  const { home, details, favorites, login, registration, profile } = ROUTES;

  return (
    <Switch>
      <Route path={login.url} exact component={LoginPageContainer} />
      <Route path={registration.url} exact component={RegistrationPage} />
      <PrivateRoute path={home.url} exact component={Landing} />
      <PrivateRoute path={details.url} component={DetailsPage} />
      <PrivateRoute path={favorites.url} exact component={FavoritesPage} />
      <PrivateRoute path={profile.url} exact component={UserProfilePage} />
      <Redirect to={home.url} />
    </Switch>
  );
};

export default App;
