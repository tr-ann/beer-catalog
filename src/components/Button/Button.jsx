import React from 'react';
import './Button.css';
import classNames from 'classnames';

const Button = ({ bright, icon, onClick, children, className }) => {
  const classes = classNames('button', className, {
    button_bright: bright,
    button_icon: icon,
  });

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
