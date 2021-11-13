import React from 'react'

interface PageProps {
  className: string;
  children: React.ReactNode;
}

const Page = (props: PageProps) => {
  return (
    <div className={`s-page ${props.className}`}>
      {props.children}
    </div>
  );
}

Page.defaultProps = {
  className: '',
  children: [],
};

export default Page
