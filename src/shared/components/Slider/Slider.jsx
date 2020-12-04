import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './styles/Slider.scss';

export default function Slider({ id, min, max, step, value, onChange, className }) {
  const containerClasses = classNames('slider-container', className);

  return (
    <div className={containerClasses}>
      <label htmlFor={id}>{value}</label>
      <input
        id={id}
        className="slider"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

Slider.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

Slider.defaultProps = {
  className: '',
};
