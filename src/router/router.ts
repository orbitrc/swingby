declare module "swingby/router" {
  import {
    To,
    NavigateOptions,
  } from 'react-router-dom'

  export interface SwingbyNavigateFunction {
    (to: To, options?: SwingbyNavigateOptions): void;
    (delta: number): void;
  }

  export interface SwingbyNavigateOptions extends NavigateOptions {
  }
}
