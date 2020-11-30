import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from './pages/header/components/Header/Header';
import Landing from './pages/home/components/Landing/Landing';

function App() {
  return (
    <div className="App">
      <Header currentPage="Home" />
      <Switch>
        <Route path="/beer/:id" />
        <Route path="/beer" component={Landing} />
      </Switch>
    </div>
  );
}

export default App;
