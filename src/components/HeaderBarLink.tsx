import React from 'react'

import './HeaderBarLink.scss'

interface HeaderBarLinkProps {
  className: string;
  height: string;
  href: string;
  label: string;
}

const HeaderBarLink = (props: HeaderBarLinkProps) => {
  return (
    <div className={`s-header-bar-link ${props.className}`}
      style={{
        height: props.height,
      }}
    >
      <a className="s-header-bar__link"
        href={props.href}
      >
        {props.label}
      </a>
    </div>
  );
}

HeaderBarLink.defaultProps = {
  className: '',
  height: '48px',
  href: '',
  label: '',
};

export default HeaderBarLink
