import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import Landing from './pages/home/components/Landing/Landing';
import Routes from './shared/constants/paths/paths';

function App() {
  const { home, details } = Routes;

  return (
    <Switch>
      <Route path={home.url} exact component={Landing} />
      <Route path={details.url} exact />
      <Redirect to={home.url} />
    </Switch>
  );
}

export default App;
