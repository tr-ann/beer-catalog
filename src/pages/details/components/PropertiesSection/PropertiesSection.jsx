import React from 'react';
import PropTypes from 'prop-types';
import Section from '../../../../shared/components/Section/Section';
import './styles/PropertiesSection.scss';

const PropertiesSection = ({ abv, ibu, ebc }) => {
  return (
    <Section isBordered title="Property" className="property-section">
      <div className="section beer-property">
        ABV
        <img src="" alt="prop" />
        <span>{abv}</span>
      </div>
      <div className="section beer-property">
        IBU
        <img src="" alt="prop" />
        <span>{ibu}</span>
      </div>
      <div className="section beer-property">
        EBC
        <img src="" alt="prop" />
        <span>{ebc}</span>
      </div>
    </Section>
  );
};

export default PropertiesSection;

PropertiesSection.propTypes = {
  abv: PropTypes.number,
  ebc: PropTypes.number,
  ibu: PropTypes.number,
};

PropertiesSection.defaultProps = {
  abv: 0,
  ebc: 0,
  ibu: 0,
};
