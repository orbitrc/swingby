import React from 'react'

import './List.scss'

interface ListProps {
  children: React.ReactNode;
}

const List = (props: ListProps) => {
  return (
    <ul className="s-list">
      {props.children}
    </ul>
  );
}

List.defaultProps = {
  children: [],
};

export default List
