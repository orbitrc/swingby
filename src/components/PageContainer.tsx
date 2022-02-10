import React from 'react'

import './PageContainer.scss'

interface PageContainerProps {
  className: string;
  children: React.ReactNode;
  style: React.CSSProperties;
  __TYPE: string;
}

const PageContainer = (props: PageContainerProps) => {
  //===============
  // Children
  //===============
  const navigation = React.Children.toArray(props.children)
    .find(child => {
      if (!React.isValidElement(child) || typeof child.type === 'string') {
        return;
      }
      return child.props.__TYPE === 'Navigation';
    });

  const contents = React.Children.toArray(props.children)
    .filter(child => {
      if (!React.isValidElement(child) || typeof child.type === 'string') {
        return;
      }
      return child.props.__TYPE !== 'Navigation';
    });

  //=====================
  // Children Props
  //=====================
  const navigationWidth = (navigation)
    ? (navigation as React.ReactElement).props.width
    : '0';

  //==============
  // Style
  //==============
  const style = {
    ...props.style,
    paddingLeft: navigationWidth,
  };

  return (
    <div className={`s-page-container ${props.className}`}
      style={style}
    >
      {navigation !== undefined &&
        navigation
      }
      {contents}
    </div>
  );
}

PageContainer.defaultProps = {
  className: '',
  children: [],
  style: {},
  __TYPE: 'PageContainer',
};

export default PageContainer
