import React, { Component } from 'react';
import BeerCard from '../../../../shared/components/BeerCard/BeerCard';
import './styles/BeerList.scss';

export default class BeerList extends Component {
  componentDidMount() {
    const { doGetBeerList } = this.props;
    doGetBeerList();
  }

  getBeers = () => {
    const { beers } = this.props;

    return beers.map((beer) => {
      return (
        <BeerCard
          key={beer.id}
          id={beer.id}
          image={beer.image_url}
          title={beer.name}
          tagline={beer.tagline}
        />
      );
    });
  };

  render() {
    const { isLoading } = this.props;

    return (
      <>{isLoading ? <div>loading...</div> : <div className="beers-list">{this.getBeers()}</div>}</>
    );
  }
}
