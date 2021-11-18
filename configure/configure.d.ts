declare module "swingby/configure" {
  export interface SwingbyConfig {
    i18n?: boolean;
  }

  export type ConfigureCallback = (/* context: SwingbyContext */) => SwingbyConfig;

  export function configure (callback: ConfigureCallback): ConfigureCallback;
}
