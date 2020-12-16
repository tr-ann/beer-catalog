import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import FavoritesPage from './pages/favorites/components/FavoritesPage/FavoritesPage';
import Landing from './pages/home/components/Landing/Landing';
import ROUTES from './shared/constants/paths/paths';

function App() {
  const { home, details, favorites } = ROUTES;

  return (
    <Switch>
      <Route path={home.url} exact component={Landing} />
      <Route path={details.url} exact />
      <Route path={favorites.url} exact component={FavoritesPage} />
      <Redirect to={home.url} />
    </Switch>
  );
}

export default App;
