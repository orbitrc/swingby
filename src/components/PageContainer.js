import React from 'react';
const PageContainer = (props) => {
    return (React.createElement("div", { className: "s-page-container" }, props.children));
};
PageContainer.defaultProps = {
    className: '',
    children: [],
};
export default PageContainer;
