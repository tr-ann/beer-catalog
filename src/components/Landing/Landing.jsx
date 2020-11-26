import React, { Component } from 'react';
import BeerListContainer from '../BeerList/BeerListContainer';
import Search from '../Search/Search';

// eslint-disable-next-line react/prefer-stateless-function
export default class Landing extends Component {
  render() {
    return (
      <div>
        <Search />
        <BeerListContainer />
      </div>
    );
  }
}
