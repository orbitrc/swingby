import React from 'react';
import classNames from 'classnames';
import './Button.scss';
const Button = (props) => {
    const classes = classNames({
        's-button': true,
        's-pa-md': true,
    });
    return (React.createElement("button", { className: classes, onClick: props.onClick },
        props.label,
        props.children));
};
Button.defaultProps = {
    label: 'Button',
};
export default Button;
