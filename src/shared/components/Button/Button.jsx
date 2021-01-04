import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './styles/Button.scss';

const Button = ({ isBright, isDisabled, onClick, value, children, className, name }) => {
  const classes = classNames('button', className, {
    button_bright: isBright,
  });

  return (
    <button
      type="button"
      disabled={isDisabled}
      className={classes}
      name={name}
      value={value}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  isBright: PropTypes.bool,
  isDisabled: PropTypes.bool,
  name: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Button.defaultProps = {
  isBright: false,
  isDisabled: false,
  name: '',
  children: '',
  className: '',
  onClick: () => {},
  value: '',
};
