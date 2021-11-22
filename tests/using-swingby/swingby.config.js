const { configure } = require('swingby/configure');

module.exports = configure(function() {
  return {
    i18n: {
      locales: ['en-GB', 'en-US', 'ja-JP', 'ko-KR'],
      defaultLocale: 'en-GB',
    },
  };
});
