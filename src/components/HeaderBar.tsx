import React from 'react'

import classNames from 'classnames'

import './HeaderBar.scss'

import { useSwingby } from '../hooks/'

interface HeaderBarProps {
  children: React.ReactNode;
  height: string;
  logo: string;
  mobileSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  title: string;
}

const HeaderBar = (props: HeaderBarProps) => {
  const swingby = useSwingby();

  const classes = classNames({
    's-header-bar': true,
    's-header-bar--mobile': (() => {
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
    })(),
  });

  const styles = {
    height: props.height,
  };

  const logoImgStyles = {
    width: `calc(${props.height} - 16px)`,
    height: `calc(${props.height} - 16px)`,
  };

  const headerBarLinks = React.Children.toArray(props.children)
    .filter(child => {
      if (!React.isValidElement(child) || typeof child.type === 'string') {
        return;
      }
      return child.type.name === 'HeaderBarLink';
    });

  return (
    <div className={classes}
      style={styles}
    >
      <div className="s-header-bar__logo">
        <img
          src={props.logo}
          style={logoImgStyles}
        />
        <div
          className="text-weight-black"
        >{props.title}</div>
      </div>
      {/* Header bar links */}
      {headerBarLinks.map((link, index: number) => (
        React.cloneElement(link as React.ReactElement, {
          key: index,
          height: props.height,
        })
      ))
      }
    </div>
  );
}

HeaderBar.defaultProps = {
  height: '64px',
  logo: '',
  mobileSize: 'sm',
  title: '',
};

export default HeaderBar
