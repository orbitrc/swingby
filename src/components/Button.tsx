import React from 'react'

import './Button.scss'

interface ButtonProps {
  children: React.ReactNode;
  label: string;
  onClick: Function;
}

const Button = (props: ButtonProps) => {
  return (
    <button className="s-button"
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
