import React from 'react';
import classNames from 'classnames';
import Slider from '../../../../shared/components/Slider/Slider';
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
          min="2"
          max="14"
          step="0.1"
          className="filter__slider"
          value={abv}
          onChange={onChange}
        />
      </div>
      <div className="filter__category">
        International Bitterness Units
        <Slider
          id="ibu"
          min="0"
          max="120"
          step="10"
          className="filter__slider"
          value={ibu}
          onChange={onChange}
        />
      </div>
      <div className="filter__category">
        Color by EBC
        <Slider
          id="ebc"
          min="4"
          max="80"
          step="1"
          className="filter__slider"
          value={ebc}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Filter;
