import React from 'react';
import classNames from 'classnames';
import './styles/Input.scss';

const Input = ({ classNames: classes, placeholder, onChange, value }) => {
  const inputClass = classNames('input', classes);

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
