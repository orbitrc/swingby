import React from 'react';
const Page = (props) => {
    return (React.createElement("div", { className: "s-page" }, props.children));
};
Page.defaultProps = {
    className: '',
    children: [],
};
export default Page;
