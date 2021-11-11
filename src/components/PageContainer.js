import React from 'react';
const PageContainer = (props) => {
    return (React.createElement("div", { className: `s-page-container ${props.className}`, style: props.style }, props.children));
};
PageContainer.defaultProps = {
    className: '',
    children: [],
    style: {},
};
export default PageContainer;
