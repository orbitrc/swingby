import { useState, useEffect, useRef } from 'react'

interface SScreen {
  width: number;
  height: number;
}

function useSwingby() {
  const [screen, setScreen] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  } as SScreen);

  function windowResizeHandler() {
    setScreen({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    setScreen({
      width: window.innerWidth,
      height: window.innerHeight,
    });

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
