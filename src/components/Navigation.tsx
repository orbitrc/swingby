import React from 'react'

import './Navigation.scss'

import { SScreenName } from '../types'

interface NavigationProps {
  children: React.ReactNode;
  className: string;
  mobileSize: SScreenName;
  width: string;
  __TYPE: string;
}

const Navigation = (props: NavigationProps) => {
  return (
    <nav className={`s-navigation ${props.className}`}>
      {props.children}
    </nav>
  );
}

Navigation.defaultProps = {
  children: [],
  className: '',
  mobileSize: 'sm',
  width: '128px',
  __TYPE: 'Navigation',
} as NavigationProps;

export default Navigation
