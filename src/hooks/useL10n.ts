import { useLocation } from 'react-router-dom'

import { CardinalPluralRule, OrdinalPluralRule, Messages } from 'swingby/l10n'

import { getCurrentLocale } from '../utils'

class Translator {
  messages: Messages;

  constructor(messages: Messages) {
    this.messages = messages;
  }

  static format(text: string, ...numbers: number[]): string {
    while (text.includes('%d')) {
      text = text.replace('%d', numbers[0].toFixed(10));
    }

    return text;
  }

  public translate(key: string, ...numbers: number[]): string {
    const location = useLocation();
    const locale = getCurrentLocale(location.pathname);

    const message = this.messages[key][locale];

    if (message instanceof CardinalPluralRule) {
      const formatter = Intl.PluralRules(locale, { type: 'cardinal' });
      return 'plural rules';
    } else if (message instanceof OrdinalPluralRule) {
      return 'ordinal rules';
    } else {
      return message;
    }
  }
}

export function useL10n(messages: Messages) {
  const translator = new Translator(messages);
  const _ = translator.translate.bind(translator);

  return _;
}
