import React from 'react'

import classNames from 'classnames'

import './HeaderBar.scss'

interface HeaderBarProps {
  children: React.ReactNode;
  height: string;
  logo: string;
}

const HeaderBar = (props: HeaderBarProps) => {
  const classes = classNames({
    's-header-bar': true,
  });

  const styles = {
    height: props.height,
  };

  return (
    <div className={classes}
      style={styles}
    >
      {props.children}
    </div>
  );
}

HeaderBar.defaultProps = {
  height: '48px',
  logo: '',
};

export default HeaderBar
