import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BeerCardContainer from '../../../../shared/components/BeerCard/BeerCardContainer';
import './styles/FavoriteBeers.scss';

export default class FavoriteBeers extends Component {
  getFavoritesBeers = () => {
    const { beers } = this.props;

    const renderedBeers = beers.map((beer) => {
      return (
        <BeerCardContainer
          key={beer.id}
          id={beer.id}
          image={beer.image_url}
          title={beer.name}
          description={beer.description}
          tagline={beer.tagline}
          favorite
        />
      );
    });

    return renderedBeers;
  };

  render() {
    return (
      <div className="favorites">
        <h2>Your favorite beers</h2>
        {this.getFavoritesBeers()}
      </div>
    );
  }
}

FavoriteBeers.propTypes = {
  beers: PropTypes.arrayOf(PropTypes.object).isRequired,
};
