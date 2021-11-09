import React from 'react'

interface LayoutProps {
  className: string;
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <div className="s-layout">
      {props.children}
    </div>
  )
}

Layout.defaultProps = {
  className: '',
  children: [],
};

export default Layout
