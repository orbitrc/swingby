import path from 'path';
import React from 'react';
import { useNavigate as reactUseNavigate, useLocation as reactUseLocation, useHref, useLinkClickHandler, } from 'react-router-dom';
import { getCurrentLocale, containsLocale, } from '../src/utils';
//====================
// useNavigate Hook
//====================
function useNavigate() {
    const reactNavigate = reactUseNavigate();
    return function navigate(to, options) {
        if (typeof to === 'number') {
            reactNavigate(to);
        }
        else {
            // Make locale path.
            let localePath = '';
            if (process.env.SWINGBY_I18N === undefined) {
                localePath = '';
            }
            else if (options.locale === 'auto') {
                localePath = `/${getCurrentLocale(location.pathname)}`;
            }
            else if (typeof options.locale === 'string') {
                localePath = `/${options.locale}`;
            }
            // Append locale path to `to`.
            if (typeof to === 'string') {
                to = path.resolve(path.join(localePath, to));
            }
            else if (typeof to === 'object') {
                to.pathname ? to.pathname = `${localePath}/${to.pathname}` : null;
            }
            reactNavigate(to, options);
        }
    };
}
//==================
// useLocation Hook
//==================
function useLocation() {
    const reactLocation = reactUseLocation();
    if (process.env.SWINGBY_I18N !== undefined) {
        // Set locale.
        reactLocation.locale = getCurrentLocale(location.pathname);
        // Change pathname without locale.
        reactLocation.pathname = reactLocation.pathname.replace(`/${reactLocation.locale}`, '');
    }
    return reactLocation;
}
//==================
// Link Component
//==================
const Link = (props) => {
    let to = typeof props.to === 'string'
        ? props.to
        : props.to.pathname;
    // Use locale.
    if (process.env.SWINGBY_I18N !== undefined) {
        const currentLocale = getCurrentLocale(location.pathname);
        if (to.startsWith('/')) {
            to = (containsLocale(location.pathname))
                ? `/${currentLocale}${to}`
                : `/${to}`;
            to = path.resolve(to);
        }
        else {
            const localePath = (containsLocale(location.pathname))
                ? `/${currentLocale}`
                : '/';
            to = path.resolve(localePath, location.pathname, '..', to);
        }
    }
    const href = useHref(to);
    const { replace, state, target } = props;
    // Below code from `https://github.com/remix-run/react-router/blob/main/packages/react-router-dom/index.tsx#L218`.
    const internalOnClick = useLinkClickHandler(to, { replace, state, target });
    function handleClick(event) {
        if (props.onClick)
            props.onClick(event);
        if (!event.defaultPrevented && !props.reloadDocument) {
            internalOnClick(event);
        }
    }
    return (React.createElement("a", { className: props.className, href: href, onClick: handleClick }, props.children));
};
Link.defaultProps = {
    replace: false,
};
export { useNavigate, useLocation, Link, };
