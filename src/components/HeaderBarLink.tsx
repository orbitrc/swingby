import React from 'react'

import './HeaderBarLink.scss'

interface HeaderBarLinkProps {
  className: string;
  height: string;
  label: string;
}

const HeaderBarLink = (props: HeaderBarLinkProps) => {
  return (
    <div className={`s-header-bar-link ${props.className}`}
      style={{
        height: props.height,
      }}
    >
      <a className="link"
        href=""
      >
        {props.label}
      </a>
    </div>
  );
}

HeaderBarLink.defaultProps = {
  className: '',
  height: '48px',
  label: '',
};

export default HeaderBarLink
