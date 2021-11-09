import React from 'react';
const Layout = (props) => {
    return (React.createElement("div", { className: "s-layout" }, props.children));
};
Layout.defaultProps = {
    className: '',
    children: [],
};
export default Layout;
