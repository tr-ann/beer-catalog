import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './styles/Button.scss';

const Button = ({ bright, onClick, value, children, className }) => {
  const classes = classNames('button', className, {
    button_bright: bright,
  });

  return (
    <button type="button" className={classes} value={value} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  bright: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Button.defaultProps = {
  bright: false,
  children: '',
  className: '',
  onClick: null,
  value: '',
};
