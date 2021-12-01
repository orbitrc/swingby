import React from 'react'

import './Select.scss'

interface SelectProps {
  className: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  options: SelectOption[];
  value: string;
}

export interface SelectOption {
  value: string;
  label: string;
}

const Select = (props: SelectProps) => {
  return (
    <select className={`s-select ${props.className}`}
      onChange={props.onChange ? e => props.onChange(e) : null}
      value={props.value}
    >
      {props.options.map(option => {
        return (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        );
      })}
    </select>
  );
}

Select.defaultProps = {
  className: '',
  options: [],
  value: '',
};

export default Select
