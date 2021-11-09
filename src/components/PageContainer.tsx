import React from 'react'

interface PageContainerProps {
  className: string;
  children: React.ReactNode;
}

const PageContainer = (props) => {
  return (
    <div className="s-page-container">
      {props.children}
    </div>
  );
}

PageContainer.defaultProps = {
  className: '',
  children: [],
};

export default PageContainer
