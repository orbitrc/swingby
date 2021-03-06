import React, { ReactElement, Suspense } from 'react'
import {
  RouteObject,
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

console.log(process.env.SWINGBY_I18N);
console.log(process.env);

function i18nRoutes(routes: RouteObject[]): RouteObject[] {
  let newRoutes = [...routes];
  const locales = process.env.SWINGBY_I18N_LOCALES.split(':').reverse();
  locales.forEach(locale => {
    // Copy base routes.
    const baseRoutes = [];
    routes.forEach(route => {
      baseRoutes.push(Object.assign({}, route));
    });

    // Create localized routes objects.
    let localizedRoutes = [...baseRoutes];
    localizedRoutes.forEach(topLevelRoute => {
      topLevelRoute.path = `/${locale}${topLevelRoute.path}`;
    });

    newRoutes = localizedRoutes.concat(newRoutes);
  });

  return newRoutes;
}

/**
 * Maps each routes and return the `Route`s.
 * @param routes An array of RouteObject.
 * @returns Array of JSX.Element that mapped with Route.
 */
function mapRoutes(routes: RouteObject[]): JSX.Element[] {
  if (routes === undefined) {
    return [];
  }

  const map = routes.map((route, index) => {
    return (
      <Route
        path={route.path}
        key={index}
        index={route.index}
        element={route.element as ReactElement}
      >
        {mapRoutes(route.children)}
      </Route>
    );
  });

  return map;
}

interface SwingbyAppProps {
  routes: RouteObject[];
}

const SwingbyApp = (props: SwingbyAppProps) => {
  const routes = process.env.SWINGBY_I18N
    ? i18nRoutes(props.routes)
    : props.routes;

  return (
    <div className="s-app">
      <BrowserRouter>
        <Suspense fallback={<div>Loading</div>} >
          <Routes>
            {mapRoutes(routes)}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default SwingbyApp
