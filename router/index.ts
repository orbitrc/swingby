import {
  To,
  useNavigate as reactUseNavigate,
} from 'react-router-dom'

import {
  SwingbyNavigateFunction,
  SwingbyNavigateOptions,
} from 'swingby/router'

import {
  getCurrentLocale,
} from '../src/utils'

function useNavigate(): SwingbyNavigateFunction {
  const reactNavigate = reactUseNavigate();

  return function navigate(to: To | number, options?: SwingbyNavigateOptions) {
    if (typeof to === 'number') {
      reactNavigate(to);
    } else {
      // Make locale path.
      let localePath = '';
      if (process.env.SWINGBY_I18N === undefined) {
        localePath = '';
      } else if (options.locale === 'auto') {
        localePath = `/${getCurrentLocale(location.pathname)}`;
      } else if (typeof options.locale === 'string') {
        localePath = `/${options.locale}`;
      }
      // Append locale path to `to`.
      if (typeof to === 'string') {
        to = `${localePath}/${to}`;
      } else if (typeof to === 'object') {
        to.pathname ? to.pathname = `${localePath}/${to.pathname}` : null;
      }
      reactNavigate(to, options);
    }
  }
}

export {
  SwingbyNavigateFunction,
  SwingbyNavigateOptions,

  useNavigate,
}
