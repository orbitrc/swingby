declare module "swingby/configure" {
  export interface SwingbyConfig {
    /**
     * Enable Swingby i18n mode.
     */
    i18n?: boolean;

    devServer?: {
      port?: number;
      open?: boolean;
    };
  }

  export type ConfigureCallback = (/* context: SwingbyContext */) => SwingbyConfig;

  export function configure (callback: ConfigureCallback): ConfigureCallback;
}
