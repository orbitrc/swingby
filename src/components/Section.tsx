import React from 'react'

import './Section.scss'

interface SectionProps {
  children: React.ReactNode;
  header: React.ReactNode;
}

const Section = (props: SectionProps) => {
  return (
    <div className="s-section">
      <li className="s-section__header">
        {props.header}
      </li>
      <ul className="s-section__items">
        {React.Children.toArray(props.children).map((child, index) => (
          <li key={index}>
            {child}
          </li>
        ))}
      </ul>
    </div>
  );
}

Section.defaultProps = {
  children: [],
  header: [],
};

export default Section
