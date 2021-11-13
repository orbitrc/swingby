import React from 'react'
import { Link } from 'react-router-dom'

import './HeaderBarLink.scss'

interface HeaderBarLinkProps {
  className: string;
  height: string;
  to: string;
  label: string;
}

const HeaderBarLink = (props: HeaderBarLinkProps) => {
  return (
    <div className={`s-header-bar-link ${props.className}`}
      style={{
        height: props.height,
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
};

export default HeaderBarLink
