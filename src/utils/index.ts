export function getCurrentLocale(pathname: string): string {
  // Returns browser's locale if i18n not set.
  if (!process.env.SWINGBY_I18N) {
    return navigator.language;
  }

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
