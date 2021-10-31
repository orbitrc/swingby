import React from 'react'

import classNames from 'classnames'

import './Button.scss'

interface ButtonProps {
  children: React.ReactNode;
  label: string;
  onClick: Function;
}

const Button = (props: ButtonProps) => {
  const classes = classNames({
    's-button': true,
    's-pa-md': true,
  });

  return (
    <button className={classes}
      onClick={props.onClick}
    >
      {props.label}
      {props.children}
    </button>
  );
}

Button.defaultProps = {
  label: 'Button',
}

export default Button
