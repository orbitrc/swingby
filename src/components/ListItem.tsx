import React from 'react'

import './ListItem.scss'

interface ListItemProps {
  children: React.ReactNode;
  label: string;
  prepend: React.ReactNode;
  __TYPE: string;
}

const ListItem = (props:ListItemProps) => {
  return (
    <li className="s-list-item">
      {React.Children.toArray(props.prepend).length > 0 &&
        <div
          className="s-list-item__prepend"
        >
          {props.prepend}
        </div>
      }
      <div
        className="s-list-item__label"
      >
        {props.label}
      </div>
    </li>
  );
}

ListItem.defaultProps = {
  children: [],
  label: '',
  prepend: [],
  __TYPE: 'ListItem',
} as ListItemProps;

export default ListItem
