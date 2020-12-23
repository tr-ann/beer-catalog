import React from 'react';
import PropTypes from 'prop-types';
import Section from '../../../../shared/components/Section/Section';
import infoIcon from '../../../../shared/images/details/info.svg';
import './styles/PropertiesSection.scss';
import Tooltip from '../../../../shared/components/Tooltip/Tooltip';
import {
  ABV_DESCRIPTION,
  EBC_DESCRIPTION,
  IBU_DESCRIPTION,
} from '../../../../shared/constants/beer/beerParams';

const PropertiesSection = ({ abv, ibu, ebc }) => {
  return (
    <Section isBordered title="Property" className="property-section">
      <div className="section beer-property">
        <div>
          ABV
          <Tooltip content={ABV_DESCRIPTION}>
            <img className="property__info" src={infoIcon} alt="prop" />
          </Tooltip>
        </div>
        <span className="property__value">{abv.toFixed(1)}</span>
      </div>
      <div className="section beer-property">
        <div>
          IBU
          <Tooltip content={IBU_DESCRIPTION}>
            <img className="property__info" src={infoIcon} alt="prop" />
          </Tooltip>
        </div>
        <span className="property__value">{ibu.toFixed(1)}</span>
      </div>
      <div className="section beer-property">
        <div>
          EBC
          <Tooltip content={EBC_DESCRIPTION}>
            <img className="property__info" src={infoIcon} alt="prop" />
          </Tooltip>
        </div>
        <span className="property__value">{ebc.toFixed(1)}</span>
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
