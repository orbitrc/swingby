import React, { useState, useEffect } from 'react'

import classNames from 'classnames'

import './HeaderBar.scss'

import { SColor } from '../types'
import { useSwingby } from '../hooks/'

interface HeaderBarProps {
  children: React.ReactNode;
  className: string;
  color: SColor;
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

  useEffect(() => {
    const linksElements = document.getElementsByClassName(
      's-header-bar__links--mobile'
    );
    const linksElement = linksElements.length > 0 ? linksElements[0] : null;
    if (linksElement) {
      const linkElements = linksElement.getElementsByClassName(
        's-header-bar-link'
      );
      for (let i = 0; i < linkElements.length; ++i) {
        const el = linkElements[i];
        setTimeout(() => {
          el.classList.add('s-header-bar-link--show');
        }, i * 500);
      }
    }
  }, []);

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
    [`bg-${props.color}`]: true,
  }, props.className);

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

  const menuButtonWidthNumber = parseFloat(props.height) - 16;

  const menuButtonStyles = {
    width: `${menuButtonWidthNumber}px`,
    height: `${menuButtonWidthNumber}px`,
  };

  const bunWidthNumber = parseFloat(props.height) / 2;
  const bunLeftNumber = (menuButtonWidthNumber - bunWidthNumber) / 2;

  const bunWidth = `${bunWidthNumber}px`;
  const bunLeft = `${bunLeftNumber}px`;
  const bunOffset = `${bunWidthNumber / 2}px`;

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
      {/* Mobile Menu Button */}
      {isMobile() &&
        <div
          className={menuButtonClasses}
          style={menuButtonStyles}
          onClick={() => {
            setShowLinks(!showLinks);
          }}
        >
          <div
            className="s-header-bar__menu-button__bun-top"
            style={{
              width: bunWidth,
              left: bunLeft,
              top: bunOffset,
            }}
          ></div>
          <div
            className="s-header-bar__menu-button__bun-bottom"
            style={{
              width: bunWidth,
              left: bunLeft,
              bottom: bunOffset,
            }}
          ></div>
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
      {!isMobile()
        ? headerBarLinks.map((link, index: number) => (
            React.cloneElement(link as React.ReactElement, {
              key: index,
              height: props.height,
            })
          ))
        : <div
            className={classNames({
              's-header-bar__links--mobile': true,
              [`bg-${props.color}`]: true,
            })}
            style={{
              display: showLinks ? 'initial' : 'none',
              top: props.height,
            }}
          >
            {headerBarLinks.map((link, index: number) => (
              React.cloneElement(link as React.ReactElement, {
                key: index,
                height: props.height,
              })
            ))}
          </div>
      }
    </div>
  );
}

HeaderBar.defaultProps = {
  className: '',
  color: 'primary',
  height: '64px',
  logo: '',
  mobileSize: 'sm',
  title: '',
};

export default HeaderBar
