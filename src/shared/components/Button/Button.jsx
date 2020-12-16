import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './styles/Button.scss';

const Button = ({ isBright, onClick, value, children, className }) => {
  const classes = classNames('button', className, {
    button_bright: isBright,
  });

  return (
    <button type="button" className={classes} value={value} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  isBright: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Button.defaultProps = {
  isBright: false,
  children: '',
  className: '',
  onClick: null,
  value: '',
};
