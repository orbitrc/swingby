import React from 'react'

import './Section.scss'

interface SectionProps {
  children: React.ReactNode;
  header: React.ReactNode;
  __TYPE: string;
}

const Section = (props: SectionProps) => {
  return (
    <div className="s-section">
      <li className="s-section__header">
        {props.header}
      </li>
      <ul className="s-section__items">
        {React.Children.toArray(props.children).map((child, index) => {
          if (!React.isValidElement(child) || typeof child === 'string') {
            return (
              <li
                key={index}
              >
                {child}
              </li>
            );
          } else if (child.props.__TYPE === 'ListItem') {
            return (
              <React.Fragment
                key={index}
              >
                {React.cloneElement(child)}
              </React.Fragment>
            );
          }
        })}
      </ul>
    </div>
  );
}

Section.defaultProps = {
  children: [],
  header: [],
  __TYPE: 'Section',
};

export default Section
