import path from 'path';
import React from 'react';
import { useNavigate as reactUseNavigate, useHref, useLinkClickHandler, } from 'react-router-dom';
import { getCurrentLocale, } from '../src/utils';
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
                to = `${localePath}/${to}`;
            }
            else if (typeof to === 'object') {
                to.pathname ? to.pathname = `${localePath}/${to.pathname}` : null;
            }
            reactNavigate(to, options);
        }
    };
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
        if (to.startsWith('/')) {
            to = `/${getCurrentLocale(location.pathname)}${to}`;
        }
        else {
            const localePath = `/${getCurrentLocale(location.pathname)}`;
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
export { useNavigate, Link, };
