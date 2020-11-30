import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './Main.css';

export default function Main() {
  return (
    <Switch>
      <Route path="/beer/:id" />
      <Route path="/beer" />
    </Switch>
  );
}
