import React from 'react'

import classNames from 'classnames'

import './Navigation.scss'

import { SScreenName } from '../types'
import { useSwingby } from '../hooks'

interface NavigationProps {
  children: React.ReactNode;
  className: string;
  mobileSize: SScreenName;
  width: string;
  __TYPE: string;
}

const Navigation = (props: NavigationProps) => {
  //============
  // Hooks
  //============
  const swingby = useSwingby();

  function isMobile(): boolean {
    switch (props.mobileSize) {
      case 'xs':
        return swingby.screen.width < swingby.screen.sizes['sm'];
      case 'sm':
        return swingby.screen.width < swingby.screen.sizes['md'];
      case 'md':
        return swingby.screen.width < swingby.screen.sizes['lg'];
      case 'lg':
        return swingby.screen.width < swingby.screen.sizes['xl'];
      case 'xl':
        return swingby.screen.width >= swingby.screen.sizes['xl'];
      default:
        return false;
    }
  }

  //============
  // Class
  //============
  const className = classNames({
    's-navigation--mobile': isMobile(),
  }, props.className);

  //===========
  // Style
  //===========
  const style = {
    width: props.width,
  };

  return (
    <nav className={`s-navigation ${className}`}
      style={style}
    >
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
