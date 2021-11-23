declare module "swingby/l10n" {
  export interface PluralRule {
    zero: string;
    one: string;
    two: string;
    few: string;
    many: string;
    other: string;
  }

  export class CardinalPluralRule {
    pluralRule: PluralRule;

    constructor({ zero, one, two, few, many, other }: {
      zero?: string,
      one?: string,
      two?: string,
      few?: string,
      many?: string,
      other?: string,
    });

    public get zero(): string;
    public get one(): string;
    public get two(): string;
    public get few(): string;
    public get many(): string;
    public get other(): string;
  }

  export class OrdinalPluralRule {
    pluralRule: PluralRule;

    constructor({ zero, one, two, few, many, other }: {
      zero?: string,
      one?: string,
      two?: string,
      few?: string,
      many?: string,
      other?: string,
    });

    public get zero(): string;
    public get one(): string;
    public get two(): string;
    public get few(): string;
    public get many(): string;
    public get other(): string;
  }

  export type Message = CardinalPluralRule | OrdinalPluralRule | string;

  export interface Messages {
    [key: string]: Record<string, Message>;
  }
}
