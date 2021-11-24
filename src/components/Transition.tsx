import React, { useEffect, useState } from 'react'

import classNames from 'classnames'

import './Transition.scss'

interface TransitionProps {
  children: React.ReactNode;
  duration: number;
  in: boolean;
  initialStyle: React.CSSProperties;
  name: 'scale';
}

const Transition = (props: TransitionProps) => {
  const [enter, setEnter] = useState(false);
  const [initialStyle, setInitialStyle] = useState(props.initialStyle);

  useEffect(() => {
    if (props.in === true) {
      setEnter(true);
      setInitialStyle({});
      setTimeout(() => {
        setEnter(false);
      }, props.duration);
    } else {
      setEnter(false);
      setInitialStyle(props.initialStyle);
    }
  }, [props.in]);

  const className = classNames({
    [`s-transition--${props.name}-enter`]: enter,
  });

  const styles = {
    transitionDuration: `${props.duration}ms`,
  };

  return (
    <>
      {props.in &&
        React.Children.toArray(props.children).map(child => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              className: `${child.props.className} ${className}`,
              style: {
                ...styles,
                ...child.props.style,
                ...initialStyle,  // Initial style will override props.style.
              },
            });
          }
        })
      }
    </>
  );
}

Transition.defaultProps = {
  children: [],
  duration: 300,
  in: true,
  initialStyle: {},
  name: 'scale',
};

export default Transition
