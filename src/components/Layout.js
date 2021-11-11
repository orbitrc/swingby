import React from 'react';
const Layout = (props) => {
    //==============
    // Children
    //==============
    const headerBar = React.Children.toArray(props.children).find(child => {
        if (!React.isValidElement(child) || typeof child.type === 'string') {
            return;
        }
        return child.type.name === 'HeaderBar';
    });
    const pageContainer = React.Children.toArray(props.children).find(child => {
        if (!React.isValidElement(child) || typeof child.type === 'string') {
            return;
        }
        return child.type.name === 'PageContainer';
    });
    //=====================
    // Children Props
    //=====================
    const headerBarHeight = (headerBar)
        ? headerBar.props.height
        : '0';
    return (React.createElement("div", { className: "s-layout" },
        headerBar &&
            headerBar,
        pageContainer &&
            React.cloneElement(pageContainer, {
                style: {
                    paddingTop: headerBarHeight,
                },
            })));
};
Layout.defaultProps = {
    className: '',
    children: [],
};
export default Layout;
