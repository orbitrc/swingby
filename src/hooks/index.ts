import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

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

interface SI18n {
  locale: string;
  systemLocale: string;
}

function getCurrentLocale(pathname: string): string {
  const locales = process.env.SWINGBY_I18N_LOCALES.split(':');

  // Returns default locale if pathname is `/`.
  if (pathname === '/') {
    return process.env.SWINGBY_I18N_DEFAULT_LOCALE;
  }
  // If first path not in locales, returns default locale.
  const first = pathname.split('/')[1];
  if (!locales.includes(first)) {
    return process.env.SWINGBY_I18N_DEFAULT_LOCALE;
  }
  // Returns matched locale.
  if (locales.includes(first)) {
    return first;
  }
}

interface SwingbyObject {
  screen: SScreen;
  i18n: SI18n;
}

function useSwingby(): SwingbyObject {
  //=============
  // Screen
  //=============
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

  //=============
  // I18n
  //=============
  const location = useLocation();
  const i18n: SI18n = {
    locale: getCurrentLocale(location.pathname),
    systemLocale: navigator.language,
  };

  return {
    screen,
    i18n,
  };
}

export {
  useSwingby,
}
