import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Slider from '../../../../shared/components/Slider/Slider';
import {
  MAX_ALCOHOL_BY_VOLUME,
  MAX_BITTERNESS_UNITS,
  MAX_COLOR_BY_EBC,
  MIN_ALCOHOL_BY_VOLUME,
  MIN_BITTERNESS_UNITS,
  MIN_COLOR_BY_EBC,
  STEP_ALCOHOL_BY_VOLUME,
  STEP_BITTERNESS_UNITS,
  STEP_COLOR_BY_EBC,
} from '../../../../shared/constants/beer/beerParams';
import './styles/Filter.scss';

const Filter = ({ ibu, abv, ebc, isHidden, onChange }) => {
  const classes = classNames('filter', { filter_hidden: isHidden });

  return (
    <div className={classes}>
      <h3 className="filter__title">Filter results</h3>
      <div className="filter__category">
        Alcohol by volume
        <Slider
          id="abv"
          min={MIN_ALCOHOL_BY_VOLUME}
          max={MAX_ALCOHOL_BY_VOLUME}
          step={STEP_ALCOHOL_BY_VOLUME}
          className="filter__slider"
          value={abv}
          onChange={onChange}
        />
      </div>
      <div className="filter__category">
        International Bitterness Units
        <Slider
          id="ibu"
          min={MIN_BITTERNESS_UNITS}
          max={MAX_BITTERNESS_UNITS}
          step={STEP_BITTERNESS_UNITS}
          className="filter__slider"
          value={ibu}
          onChange={onChange}
        />
      </div>
      <div className="filter__category">
        Color by EBC
        <Slider
          id="ebc"
          min={MIN_COLOR_BY_EBC}
          max={MAX_COLOR_BY_EBC}
          step={STEP_COLOR_BY_EBC}
          className="filter__slider"
          value={ebc}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  ibu: PropTypes.number.isRequired,
  abv: PropTypes.number.isRequired,
  ebc: PropTypes.number.isRequired,
  isHidden: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
