import React from 'react';
import './styles/Button.scss';
import classNames from 'classnames';

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
