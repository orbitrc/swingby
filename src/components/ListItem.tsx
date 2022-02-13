import React from 'react'

import classNames from 'classnames'

import './ListItem.scss'

import { Link } from 'swingby/router'

interface ListItemProps {
  children: React.ReactNode;
  label: string;
  prepend: React.ReactNode;
  to?: string;
  __TYPE: string;
}

const ListItem = (props: ListItemProps) => {
  //===========
  // Class
  //===========
  const className = classNames({
    's-list-item--to': props.to ? true : false,
  });

  //============
  // Helpers
  //============
  const hasPrepend = React.Children.toArray(props.prepend).length > 0;

  //============
  // Children
  //============
  const prepend = hasPrepend
    ? (
      <div
        className="s-list-item__prepend"
      >
        {props.prepend}
      </div>
    )
    : (<></>);

  const label = (
    <div
      className="s-list-item__label"
    >
      {props.label}
    </div>
  );

  return (
    <li className={`s-list-item ${className}`}>
      {!props.to
        ? (<>
          {/* Normal Item */}
          {prepend}
          {label}
        </>)
        : (<>
          {/* Link Item */}
          <Link
            className="s-list-item__link"
            to={props.to}
          >
            {prepend}
            {label}
            <div
              className="s-list-item__arrow-to text-weight-bold"
            >＞</div>
          </Link>
        </>)
      }
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
