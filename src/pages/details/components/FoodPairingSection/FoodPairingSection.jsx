import React from 'react';
import PropTypes from 'prop-types';
import Section from '../../../../shared/components/Section/Section';
import './styles/FoodPairingSection.scss';

const FoodPairingSection = ({ foodPairing }) => {
  const getPairing = () => {
    return foodPairing.map((item) => {
      return (
        <div key={item} className="section food-pairing__item">
          {item}
        </div>
      );
    });
  };

  return foodPairing ? (
    <Section isBordered title="Food Pairing">
      {getPairing()}
    </Section>
  ) : null;
};

export default FoodPairingSection;

FoodPairingSection.propTypes = {
  foodPairing: PropTypes.arrayOf(PropTypes.string),
};

FoodPairingSection.defaultProps = {
  foodPairing: [],
};
