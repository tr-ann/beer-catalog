import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BeerCard from '../../../../shared/components/BeerCard/BeerCard';
import './styles/BeerList.scss';

export default class BeerList extends Component {
  getBeers = () => {
    const { beers, error } = this.props;
    if (error) {
      return <div>{error}</div>;
    }

    const renderedBeers = beers.map((beer) => {
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

    return <div className="beers-list">{renderedBeers}</div>;
  };

  render() {
    return this.getBeers();
  }
}

BeerList.propTypes = {
  beers: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.objectOf(PropTypes.object),
};

BeerList.defaultProps = {
  error: null,
  beers: [],
};
