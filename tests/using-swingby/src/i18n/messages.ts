import { Message, Messages, CardinalPluralRule } from 'swingby/l10n'

export type LocaleKey =
  | 'en-GB'
  | 'en-US'
  | 'ja-JP'
  | 'ko-KR';

const messages: Messages = {
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
    'en-GB': new CardinalPluralRule({
      one: 'time.',
      other: 'times.',
    }) as Message,
    'en-US': new CardinalPluralRule({
      one: 'time.',
      other: 'times.',
    }) as Message,
    'ja-JP': 'クリックしました。',
    'ko-KR': '클릭하셨습니다.',
  } as {[key in LocaleKey]: string},
};

export default messages
