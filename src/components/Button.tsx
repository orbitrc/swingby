import React from 'react'

import classNames from 'classnames'

import './Button.scss'

interface ButtonProps {
  children: React.ReactNode;
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
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
  children: [],
  label: 'Button',
  onClick: null,
};

export default Button
