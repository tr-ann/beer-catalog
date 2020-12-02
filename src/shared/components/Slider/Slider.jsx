import React from 'react';
import './styles/Slider.scss';

export default function Slider({ id, min, max, step, value, onChange }) {
  return (
    <div className="slider-container">
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
