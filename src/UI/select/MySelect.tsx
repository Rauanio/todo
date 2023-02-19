import React from 'react';
import { FilterProps } from '../../components/PostFilter';

interface ISelect {
  defaultValue: string;
  options: FilterProps[]
  value: string;
  onChange: (value: string) => void;
}

export const MySelect = ({ defaultValue, options, value, onChange }: ISelect) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((o:any) => (
        <option key={o.value} value={o.value}>
          {o.name}
        </option>
      ))}
    </select>
  );
};
