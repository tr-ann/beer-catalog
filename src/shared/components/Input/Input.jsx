import React from 'react';
import classNames from 'classnames';
import './styles/Input.scss';

const Input = ({ className, placeholder, value, onChange, onSubmit }) => {
  const inputClass = classNames('input', className);

  const onKeyPress = (e) => {
    if (e.code === 'Enter') {
      onSubmit();
    }
  };

  return (
    <input
      type="text"
      value={value}
      className={inputClass}
      placeholder={placeholder}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  );
};

export default Input;
