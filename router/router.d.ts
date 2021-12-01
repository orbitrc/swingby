declare module "swingby/router" {
  import React from 'react'
  import {
    To,
    NavigateOptions,
    Location,
  } from 'react-router-dom'

  //===================
  // useNavigate Hook
  //===================
  export interface SwingbyNavigateFunction {
    (to: To, options?: SwingbyNavigateOptions): void;
    (delta: number): void;
  }

  export interface SwingbyNavigateOptions extends NavigateOptions {
    locale?: 'auto' | string | false;
  }

  export function useNavigate(): SwingbyNavigateFunction;

  //==================
  // useLocation Hook
  //==================
  export interface SwingbyLocation extends Location {
    locale?: string;
  }

  export function useLocation(): SwingbyLocation;

  //==================
  // Link Component
  //==================
  export function Link(props: LinkProps): React.ReactElement;

  interface LinkProps
    extends Omit<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      "href"
    > {
      replace?: boolean;
      state?: any;
      to: LinkTo;
      reloadDocument?: boolean;
  }

  type LinkTo = Partial<Location> | string;
}
