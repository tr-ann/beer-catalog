import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BeerCard from '../../../../shared/components/BeerCard/BeerCard';
import './styles/BeerList.scss';

export default class BeerList extends Component {
  componentDidMount() {
    const { doGetBeerList } = this.props;
    doGetBeerList();
  }

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
    const { isLoading } = this.props;

    return <>{isLoading ? <div>loading...</div> : this.getBeers()}</>;
  }
}

BeerList.propTypes = {
  beers: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  doGetBeerList: PropTypes.func.isRequired,
};

BeerList.defaultProps = {
  error: null,
};
