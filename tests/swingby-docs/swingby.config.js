const { configure } = require('swingby/configure');

module.exports = configure(function() {
  return {
    i18n: {
      locales: ['en-US', 'en-GB', 'ko-KR'],
      defaultLocale: 'en-US',
    },
  };
});
