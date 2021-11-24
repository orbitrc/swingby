import React, { useState } from 'react'

import classNames from 'classnames'

import './Transition.scss'

interface TransitionGroupProps {
  children: React.ReactNode;
  duration: number;
  name: 'scale' | 'wake-up';
}

const TransitionGroup = (props: TransitionGroupProps) => {
  const [enter, setEnter] = useState(false);

  const className = classNames({
    [`s-transition--${props.name}-enter`]: enter,
  });

  return (
    <>
      {React.Children.toArray(props.children).map((child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            className: `${child.props.className} ${className}`,
          });
        }
      })}
    </>
  );
}

TransitionGroup.defaultProps = {
  children: [],
  duration: 300,
  name: 'scale',
};

export default TransitionGroup
