import React from 'react'

interface PageContainerProps {
  className: string;
  children: React.ReactNode;
  style: React.CSSProperties;
}

const PageContainer = (props: PageContainerProps) => {
  return (
    <div className={`s-page-container ${props.className}`}
      style={props.style}
    >
      {props.children}
    </div>
  );
}

PageContainer.defaultProps = {
  className: '',
  children: [],
  style: {},
};

export default PageContainer
