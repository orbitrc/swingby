import React from 'react';
import classNames from 'classnames';
import './HeaderBar.scss';
const HeaderBar = (props) => {
    const classes = classNames({
        's-header-bar': true,
    });
    const styles = {
        height: props.height,
    };
    const logoImgStyles = {
        width: `calc(${props.height} - 16px)`,
        height: `calc(${props.height} - 16px)`,
    };
    const headerBarLinks = React.Children.toArray(props.children)
        .filter(child => {
        if (!React.isValidElement(child) || typeof child.type === 'string') {
            return;
        }
        return child.type.name === 'HeaderBarLink';
    });
    return (React.createElement("div", { className: classes, style: styles },
        React.createElement("img", { className: "logo", src: props.logo, style: logoImgStyles }),
        headerBarLinks.map((link, index) => (React.cloneElement(link, {
            key: index,
            height: props.height,
        })))));
};
HeaderBar.defaultProps = {
    height: '64px',
    logo: '',
    title: '',
};
export default HeaderBar;
