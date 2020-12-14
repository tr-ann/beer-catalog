import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BeerCardContainer from '../../../../shared/components/BeerCard/BeerCardContainer';
import './styles/BeerList.scss';

export default class BeerList extends Component {
  isFavoriteBeer = (id) => {
    const { favoritesIds } = this.props;

    return favoritesIds.includes(id);
  };

  getBeers = () => {
    const { beers, error } = this.props;
    if (error) {
      return <div>{error}</div>;
    }

    const renderedBeers = beers.map((beer) => {
      return (
        <BeerCardContainer
          key={beer.id}
          id={beer.id}
          image={beer.image_url}
          title={beer.name}
          tagline={beer.tagline}
          favorite={this.isFavoriteBeer(beer.id)}
        />
      );
    });

    return <div className="beers-list">{renderedBeers}</div>;
  };

  render() {
    return this.getBeers();
  }
}

BeerList.propTypes = {
  beers: PropTypes.arrayOf(PropTypes.object).isRequired,
  favoritesIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  error: PropTypes.objectOf(PropTypes.object),
};

BeerList.defaultProps = {
  error: null,
};
