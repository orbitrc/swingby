import React from 'react';
import './TestComponent.scss';
const TestComponent = () => {
    const hello = 'hello!';
    return (React.createElement("div", { className: "TestComponent" }, hello));
};
export default TestComponent;
