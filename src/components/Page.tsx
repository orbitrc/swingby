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

  const headerBarHeight = headerBar
    ? parseFloat(headerBar.style.height)
    : 0;

  const minHeight = `${swingby.screen.height - headerBarHeight}px`

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
