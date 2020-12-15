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
    const { children } = this.props;

    return (
      <div className="favorites">
        <h2 className="favorites__title">Your favorite beers</h2>
        {this.getFavoritesBeers()}
        {children}
      </div>
    );
  }
}

FavoriteBeers.propTypes = {
  beers: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

FavoriteBeers.defaultProps = {
  children: null,
};
