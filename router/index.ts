import {
  To,
  useNavigate as reactUseNavigate,
} from 'react-router-dom'

import {
  SwingbyNavigateFunction,
  SwingbyNavigateOptions,
} from 'swingby/router'

function useNavigate(): SwingbyNavigateFunction {
  const reactNavigate = reactUseNavigate();

  return function navigate(to: To | number, options?: SwingbyNavigateOptions) {
    if (typeof to === 'number') {
      reactNavigate(to);
    } else {
      reactNavigate(to, options);
    }
  }
}

export {
  SwingbyNavigateFunction,
  SwingbyNavigateOptions,

  useNavigate,
}
