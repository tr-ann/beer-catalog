import React from 'react';
import PropTypes from 'prop-types';
import Section from '../../../../shared/components/Section/Section';
import './styles/BrewingSection.scss';

const BrewingSection = ({ brewing }) => {
  return (
    <Section className="brewing" title="Brewing">
      <div className="brewing__text-container">
        <span className="brewing__text">{brewing}</span>
      </div>
    </Section>
  );
};

export default BrewingSection;

BrewingSection.propTypes = {
  brewing: PropTypes.string,
};

BrewingSection.defaultProps = {
  brewing: '',
};
