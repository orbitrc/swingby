import React from 'react'

import { useSwingby } from '../hooks'

interface LayoutProps {
  className: string;
  children: React.ReactNode;
  style: React.CSSProperties;
}

const Layout = (props: LayoutProps) => {
  //==============
  // Hooks
  //==============
  const swingby = useSwingby();

  //==============
  // Children
  //==============
  const headerBar = React.Children.toArray(props.children).find(child => {
    if (!React.isValidElement(child) || typeof child.type === 'string') {
      return;
    }

    return child.props.__TYPE === 'HeaderBar';
  });

  const pageContainer = React.Children.toArray(props.children).find(child => {
    if (!React.isValidElement(child) || typeof child.type === 'string') {
      return;
    }

    return child.props.__TYPE === 'PageContainer';
  });

  const footer = React.Children.toArray(props.children).find(child => {
    if (!React.isValidElement(child) || typeof child.type === 'string') {
      return;
    }

    return child.props.__TYPE === 'Footer';
  });

  //=====================
  // Children Props
  //=====================
  const headerBarHeight = (headerBar)
    ? (headerBar as React.ReactElement).props.height
    : '0';

  const footerHeight = (footer)
    ? (footer as React.ReactElement).props.height
    : '0';

  //=================
  // Style
  //=================
  const styles = Object.assign({
    minHeight: `${swingby.screen.height}px`,
  }, props.style);

  return (
    <div className="s-layout"
      style={styles}
    >
      {headerBar &&
        headerBar
      }
      {pageContainer &&
        React.cloneElement(pageContainer as React.ReactElement, {
          style: {
            paddingTop: headerBarHeight,
            paddingBottom: footerHeight,
          },
        })
      }
      {footer &&
        footer
      }
    </div>
  );
}

Layout.defaultProps = {
  className: '',
  children: [],
  style: {},
};

export default Layout
