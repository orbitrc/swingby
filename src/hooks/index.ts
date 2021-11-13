import { useState, useEffect, useRef } from 'react'

const breakpoints = {
  xs: 0,
  sm: 600,
  md: 1024,
  lg: 1440,
  xl: 1920,
};

type SScreenName = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

function getScreenName(): SScreenName {
  const width = window.innerWidth;
  if (width < breakpoints.sm) {
    return 'xs';
  } else if (width < breakpoints.md) {
    return 'sm';
  } else if (width < breakpoints.lg) {
    return 'md';
  } else if (width < breakpoints.xl) {
    return 'lg';
  } else {
    return 'xl';
  }
}

interface SScreen {
  width: number;
  height: number;
  name: SScreenName;
  sizes: Object;
}

function useSwingby() {
  const [screen, setScreen] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    name: getScreenName(),
    sizes: breakpoints,
  } as SScreen);

  function windowResizeHandler() {
    setScreen({
      width: window.innerWidth,
      height: window.innerHeight,
      name: getScreenName(),
      sizes: breakpoints,
    });
  }

  useEffect(() => {
    windowResizeHandler();

    window.addEventListener("resize", windowResizeHandler);

    return () => {
      window.removeEventListener("resize", windowResizeHandler);
    }
  }, []);

  return {
    screen,
  };
}

export {
  useSwingby,
}
