import React from 'react'

import './ListItem.scss'

interface ListItemProps {
  children: React.ReactNode;
  __TYPE: string;
}

const ListItem = (props:ListItemProps) => {
  return (
    <li className="s-list-item">
      {props.children}
    </li>
  );
}

ListItem.defaultProps = {
  children: [],
  __TYPE: 'ListItem',
};

export default ListItem
