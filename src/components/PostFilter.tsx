import React from 'react';

import { MyInput } from '../UI/input/MyInput';
import { MySelect } from '../UI/select/MySelect';

export interface FilterProps {
  sort: string;
  value: string;
  name?: string;
}

interface PostFilterProps {
  filter: FilterProps;
  setFilter: (value: FilterProps) => void;
}

export const PostFilter = ({ filter, setFilter }: PostFilterProps) => {
  return (
    <div>
      <MyInput
        style={{ marginTop: 20 }}
        placeholder="Поиск..."
        value={filter.value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFilter({ ...filter, value: e.target.value })
        }
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
        defaultValue="Сортировка"
        options={[
          { value: 'title', name: 'По название', sort: '' },
          { value: 'body', name: 'По описанию', sort: '' },
        ]}></MySelect>
    </div>
  );
};
