import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from '../Landing/Landing';
import './Main.css';

export default function Main() {
  return (
    <main className="main">
      <Switch>
        <Route path="/beer/:id" />
        <Route path="/beer" component={Landing} />
      </Switch>
    </main>
  );
}
