import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './styles/Input.scss';

const Input = ({ className, placeholder, value, onChange, onSubmit, type }) => {
  const inputClass = classNames('input', className);

  const onKeyPress = (e) => {
    if (e.code === 'Enter') {
      onSubmit();
    }
  };

  return (
    <input
      type={type}
      value={value}
      className={inputClass}
      placeholder={placeholder}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  );
};

export default Input;

Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  type: PropTypes.string,
};

Input.defaultProps = {
  className: '',
  placeholder: 'type...',
  type: 'text',
};
