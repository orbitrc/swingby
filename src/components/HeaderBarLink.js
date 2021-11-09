import React from 'react';
import './HeaderBarLink.scss';
const HeaderBarLink = (props) => {
    return (React.createElement("div", { className: `s-header-bar-link ${props.className}`, style: {
            height: props.height,
        } },
        React.createElement("a", { className: "link", href: "" }, props.label)));
};
HeaderBarLink.defaultProps = {
    className: '',
    height: '48px',
    label: '',
};
export default HeaderBarLink;
