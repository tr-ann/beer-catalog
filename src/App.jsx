import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Search from './components/Search/Search';

function App() {
  return (
    <div className="App">
      <Header currentPage="Home" />
      <Search />
    </div>
  );
}

export default App;
