import React from 'react'

import classNames from 'classnames'

import './HeaderBar.scss'

interface HeaderBarProps {
  children: React.ReactNode;
  height: string;
  logo: string;
  title: string;
}

const HeaderBar = (props: HeaderBarProps) => {
  const classes = classNames({
    's-header-bar': true,
  });

  const styles = {
    height: props.height,
  };

  const logoImgStyles = {
    width: `calc(${props.height} - 16px)`,
    height: `calc(${props.height} - 16px)`,
  };

  const headerBarLinks = props.children.filter(child => {
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
        React.cloneElement(link, {
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
