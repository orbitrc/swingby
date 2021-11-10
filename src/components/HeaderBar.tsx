import React from 'react'

import classNames from 'classnames'

import './HeaderBar.scss'

import { useSwingby } from '../hooks/'

interface HeaderBarProps {
  children: React.ReactNode;
  height: string;
  logo: string;
  title: string;
}

const HeaderBar = (props: HeaderBarProps) => {
  const swingby = useSwingby();

  console.log(swingby.screen.width);

  const classes = classNames({
    's-header-bar': true,
    's-header-bar__mobile': swingby.screen.width < 400,
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
      <img className="logo"
        src={props.logo}
        style={logoImgStyles}
      />
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
  title: '',
};

export default HeaderBar
