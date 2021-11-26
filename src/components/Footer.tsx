import React from 'react'

import './Footer.scss'

interface FooterProps {
  children: React.ReactNode;
  height: string;
  __TYPE: string;
}

const Footer = (props: FooterProps) => {
  const style = {
    height: props.height,
  };

  return (
    <footer className="s-footer"
      style={style}
    >
      {props.children}
    </footer>
  );
}

Footer.defaultProps = {
  children: [],
  height: '32px',
  __TYPE: 'Footer',
};

export default Footer
