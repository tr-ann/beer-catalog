import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './styles/Input.scss';

const Input = ({ id, className, placeholder, value, onChange, onSubmit, type }) => {
  const inputClass = classNames('input', className);

  const onKeyPress = (e) => {
    if (e.code === 'Enter') {
      onSubmit();
    }
  };

  return (
    <input
      id={id}
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
  id: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
  type: PropTypes.string,
};

Input.defaultProps = {
  id: '',
  className: '',
  placeholder: 'type...',
  type: 'text',
  onSubmit: () => {},
};
