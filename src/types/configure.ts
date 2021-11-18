export interface SwingbyConfig {
  i18n?: boolean;
}

export type ConfigureCallback = (/* context: SwingbyContext */) => SwingbyConfig;

export type configure = (callback: ConfigureCallback) => ConfigureCallback;
