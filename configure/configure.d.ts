declare module "swingby/configure" {
  export interface SwingbyConfig {
    /**
     * Enable Swingby i18n mode.
     */
    i18n?: {
      /**
       * List of locales.
       */
      locales: string[];
      /**
       * Default locale. This should be a one of `locales`.
       */
      defaultLocale: string;
    };

    devServer?: {
      port?: number;
      open?: boolean;
    };
  }

  export type ConfigureCallback = (/* context: SwingbyContext */) => SwingbyConfig;

  export function configure (callback: ConfigureCallback): ConfigureCallback;
}
