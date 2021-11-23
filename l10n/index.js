module.exports.CardinalPluralRule = class CardinalPluralRule {
  constructor({ zero='', one='', two='', few='', many='', other='' }) {
    this.pluralRule = {
      zero: zero,
      one: one,
      two: two,
      few: few,
      many: many,
      other: other,
    };
  }

  get zero() {
    return this.pluralRule.zero;
  }

  get one() {
    return this.pluralRule.one;
  }

  get two() {
    return this.pluralRule.two;
  }

  get few() {
    return this.pluralRule.few;
  }

  get many() {
    return this.pluralRule.many;
  }

  get other() {
    return this.pluralRule.other;
  }
};

module.exports.OrdinalPluralRule = class OrdinalPluralRule {
  constructor({ zero='', one='', two='', few='', many='', other='' }) {
    this.pluralRule = {
      zero: zero,
      one: one,
      two: two,
      few: few,
      many: many,
      other: other,
    };
  }

  get zero() {
      return this.pluralRule.zero;
  }

  get one() {
      return this.pluralRule.one;
  }

  get two() {
      return this.pluralRule.two;
  }

  get few() {
      return this.pluralRule.few;
  }

  get many() {
      return this.pluralRule.many;
  }

  get other() {
      return this.pluralRule.other;
  }
};
