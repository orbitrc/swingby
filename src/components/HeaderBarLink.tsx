import React from 'react'

import { Link } from 'swingby/router'

import './HeaderBarLink.scss'

interface HeaderBarLinkProps {
  className: string;
  height: string;
  to: string;
  label: string;
  style: React.CSSProperties;
  __TYPE: string;
}

const HeaderBarLink = (props: HeaderBarLinkProps) => {
  return (
    <div className={`s-header-bar-link ${props.className}`}
      style={{
        height: props.height,
        ...props.style,
      }}
    >
      <Link className="s-header-bar__link"
        to={props.to}
      >
        {props.label}
      </Link>
    </div>
  );
}

HeaderBarLink.defaultProps = {
  className: '',
  height: '48px',
  to: '/',
  label: '',
  style: {},
  __TYPE: 'HeaderBarLink',
};

export default HeaderBarLink
