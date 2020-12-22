/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/BeerDetails.scss';
import IngredientsSection from '../IngredientsSection/IngredientsSection';
import FoodPairingSection from '../FoodPairingSection/FoodPairingSection';
import PropertiesSection from '../PropertiesSection/PropertiesSection';
import MethodSection from '../MethodSection/MethodSection';
import BrewingSection from '../BrewingSection/BrewingSection';
import BeerDescriptionSectionContainer from '../BeerDescriptionSection/BeerDescriptionSectionContainer';

export default class BeerDetails extends Component {
  componentDidMount() {
    this.getBeerInfo();
  }

  getBeerInfo = () => {
    const { beerId, doGetBeerInfo } = this.props;

    doGetBeerInfo(beerId);
  };

  render() {
    const { beer, isLoading } = this.props;

    return isLoading ? (
      'Load data'
    ) : (
      <div className="beer-details">
        <BeerDescriptionSectionContainer beer={beer} />
        <PropertiesSection abv={beer?.abv} ibu={beer?.ibu} ebc={beer?.ebc} />
        <FoodPairingSection foodPairing={beer?.food_pairing} />
        <BrewingSection brewing={beer?.brewers_tips} />
        <IngredientsSection ingredients={beer?.ingredients} />
        <MethodSection method={beer?.method} />
      </div>
    );
  }
}

BeerDetails.propTypes = {
  beerId: PropTypes.number.isRequired,
  beer: PropTypes.objectOf(PropTypes.object),
  doGetBeerInfo: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

BeerDetails.defaultProps = {
  beer: null,
};
