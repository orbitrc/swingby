import React from 'react'

import './List.scss'

interface ListProps {
  children: React.ReactNode;
  __TYPE: string;
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
  __TYPE: 'List',
};

export default List
