import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './styles/Button.scss';

const Button = ({ bright, onClick, children, className }) => {
  const classes = classNames('button', className, {
    button_bright: bright,
  });

  return (
    <button type="button" className={classes} onClick={onClick}>
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
};

Button.defaultProps = {
  bright: false,
  children: '',
  className: '',
  onClick: null,
};
