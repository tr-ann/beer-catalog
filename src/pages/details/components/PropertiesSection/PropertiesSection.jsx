import React from 'react';
import PropTypes from 'prop-types';
import Section from '../../../../shared/components/Section/Section';
import infoIcon from '../../../../shared/images/details/info.svg';
import './styles/PropertiesSection.scss';

const PropertiesSection = ({ abv, ibu, ebc }) => {
  return (
    <Section isBordered title="Property" className="property-section">
      <div className="section beer-property">
        <div>
          ABV
          <img className="property__info" src={infoIcon} alt="prop" />
        </div>
        <span>{abv}</span>
      </div>
      <div className="section beer-property">
        <div>
          IBU
          <img className="property__info" src={infoIcon} alt="prop" />
        </div>
        <span>{ibu}</span>
      </div>
      <div className="section beer-property">
        <div>
          EBC
          <img className="property__info" src={infoIcon} alt="prop" />
        </div>
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
