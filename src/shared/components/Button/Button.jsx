import React from 'react';
import classNames from 'classnames';
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
