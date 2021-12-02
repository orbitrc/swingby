import React from 'react'

import { useSwingby } from '../hooks'

interface PageProps {
  className: string;
  children: React.ReactNode;
  style: React.CSSProperties;
}

const Page = (props: PageProps) => {
  //============
  // Hooks
  //============
  const swingby = useSwingby();

  //===============
  // Elements
  //===============
  const headerBars = document.getElementsByClassName('s-header-bar');
  const headerBar = headerBars.length > 0 ? headerBars[0] as HTMLElement : null;

  const footers = document.getElementsByClassName('s-footer');
  const footer = footers.length > 0 ? footers[0] as HTMLElement : null;

  const headerBarHeight = headerBar
    ? parseFloat(headerBar.style.height)
    : 0;

  const footerHeight = footer
    ? parseFloat(footer.style.height)
    : 0;

  const minHeightNumber = swingby.screen.height
    - headerBarHeight
    - footerHeight;

  const minHeight = `${minHeightNumber}px`;

  //============
  // Style
  //============
  const styles = Object.assign({
    minHeight: minHeight,
  }, props.style);

  return (
    <div className={`s-page ${props.className}`}
      style={styles}
    >
      {props.children}
    </div>
  );
}

Page.defaultProps = {
  className: '',
  children: [],
  style: {},
};

export default Page
