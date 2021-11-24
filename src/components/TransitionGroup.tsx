import React, { useEffect, useState } from 'react'

import classNames from 'classnames'

import './Transition.scss'

interface TransitionGroupProps {
  children: React.ReactNode;
  duration: number;
  in: boolean;
  initialStyle: React.CSSProperties;
  name: 'scale' | 'wake-up';
  sequential: boolean;
}

const TransitionGroup = (props: TransitionGroupProps) => {
  const [enter, setEnter] = useState(false);

  //=================
  // Initial styles
  //=================
  const initialStyleWakeUp = {
    transform: 'perspective(60px) rotateX(10deg)',
    opacity: '0',
    ...props.initialStyle,
  };
  function initInitialStyle(): React.CSSProperties {
    if (props.name === 'scale') {
      return {...props.initialStyle};
    } else if (props.name === 'wake-up') {
      return {...initialStyleWakeUp, ...props.initialStyle};
    }
  }

  const [initialStyle, setInitialStyle] = useState(initInitialStyle());

  useEffect(() => {
    if (props.in === true) {
      setEnter(true);
      setInitialStyle({});
    } else {
      setEnter(false);
      setInitialStyle(initInitialStyle());
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
      {React.Children.toArray(props.children).map((child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            className: `${child.props.className} ${className}`,
            style: {
              ...styles,
              ...child.props.style,
              ...initialStyle,
              transitionDelay: props.sequential ? `${index * 100}ms` : '0',
            },
          });
        }
      })}
    </>
  );
}

TransitionGroup.defaultProps = {
  children: [],
  duration: 300,
  in: true,
  initialStyle: {},
  name: 'scale',
  sequential: false,
};

export default TransitionGroup
