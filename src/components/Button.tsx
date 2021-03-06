import React from 'react'

import classNames from 'classnames'

import './Button.scss'

interface ButtonProps {
  children: React.ReactNode;
  appearance: 'rectangle' | 'round' | 'sharp';
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: ButtonProps) => {
  const classes = classNames({
    's-button': true,
    's-button--rectangle': props.appearance === 'rectangle',
    's-button--round': props.appearance === 'round',
    's-button--sharp': props.appearance === 'sharp',
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
  appearance: 'rectangle',
  label: 'Button',
  onClick: null,
} as ButtonProps;

export default Button
