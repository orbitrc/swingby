import React, { useState } from 'react'

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
  //============
  // Hooks
  //============
  const swingby = useSwingby();

  const [showLinks, setShowLinks] = useState(false);

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
  const classes = classNames({
    's-header-bar': true,
    's-header-bar--mobile': isMobile(),
  });

  const menuButtonClasses = classNames({
    's-header-bar__menu-button': true,
    's-header-bar__menu-button--active': showLinks,
  });

  //============
  // Style
  //============
  const styles = {
    height: props.height,
  };

  const logoImgStyles = {
    width: `calc(${props.height} - 16px)`,
    height: `calc(${props.height} - 16px)`,
  };

  const menuButtonStyles = {
    width: `calc(${props.height} - 16px)`,
    height: `calc(${props.height} - 16px)`,
  };

  //===============
  // Children
  //===============
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
      {isMobile() &&
        <div
          className={menuButtonClasses}
          style={menuButtonStyles}
          onClick={() => {
            setShowLinks(!showLinks);
          }}
        >
          <div className="s-header-bar__menu-button__bun-top"></div>
          <div className="s-header-bar__menu-button__bun-bottom"></div>
        </div>
      }
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
