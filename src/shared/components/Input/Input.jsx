import React from 'react';
import classNames from 'classnames';
import './styles/Input.scss';

const Input = ({ className, placeholder, onChange, value }) => {
  const inputClass = classNames('input', className);

  return (
    <input
      type="text"
      value={value}
      className={inputClass}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
