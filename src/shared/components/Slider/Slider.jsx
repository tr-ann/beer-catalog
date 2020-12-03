import React from 'react';
import classNames from 'classnames';
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
