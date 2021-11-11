import React from 'react'

interface LayoutProps {
  className: string;
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  //==============
  // Children
  //==============
  const headerBar = React.Children.toArray(props.children).find(child => {
    if (!React.isValidElement(child) || typeof child.type === 'string') {
      return;
    }

    return child.type.name === 'HeaderBar';
  });

  const pageContainer = React.Children.toArray(props.children).find(child => {
    if (!React.isValidElement(child) || typeof child.type === 'string') {
      return;
    }

    return child.type.name === 'PageContainer';
  });

  //=====================
  // Children Props
  //=====================
  const headerBarHeight = (headerBar)
    ? (headerBar as React.ReactElement).props.height
    : '0';

  return (
    <div className="s-layout">
      {headerBar &&
        headerBar
      }
      {pageContainer &&
        React.cloneElement(pageContainer as React.ReactElement, {
          style: {
            paddingTop: headerBarHeight,
          },
        })
      }
    </div>
  );
}

Layout.defaultProps = {
  className: '',
  children: [],
};

export default Layout
