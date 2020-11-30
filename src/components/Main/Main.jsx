import React from 'react';
import { Route, Switch } from 'react-router-dom';

export default function Main() {
  return (
    <Switch>
      <Route path="/beer/:id" />
      <Route path="/beer" />
    </Switch>
  );
}
