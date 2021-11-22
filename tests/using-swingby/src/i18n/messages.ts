export type LocaleKey =
  | 'en-GB'
  | 'en-US'
  | 'ja-JP'
  | 'ko-KR';

const messages = {
  'counter-prepend': {
    'en-GB': 'You have clicked',
    'en-US': 'You have clicked',
    'ja-JP': '合計',
    'ko-KR': '총',
  } as {[key in LocaleKey]: string},
  'counter-unit': {
    'en-GB': '',
    'en-US': '',
    'ja-JP': '回',
    'ko-KR': '회',
  } as {[key in LocaleKey]: string},
  'counter-append': {
    'en-GB': 'times.',
    'en-US': 'times',
    'ja-JP': 'クリックしました。',
    'ko-KR': '클릭하셨습니다.',
  } as {[key in LocaleKey]: string},
};

export default messages
