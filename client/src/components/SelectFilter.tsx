import { FILTER_OPTIONS } from '../constants/filters';
import type { filterType } from '../types/newsTypes';
import {
  useFilterSelector,
  useSetFilterSelector,
} from '../store/useFilterStore';

export const SelectFilter = () => {
  const filter = useFilterSelector();
  const setFilter = useSetFilterSelector();

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newFilter = e.target.value as filterType;
    setFilter(newFilter);
  };

  return (
    <select
      className="w-1/2 h-1/2"
      value={filter}
      onChange={(e) => handleFilterChange(e)}
    >
      {FILTER_OPTIONS.map((filterParam, i) => (
        <option value={filterParam} key={i}>
          {filterParam}
        </option>
      ))}
    </select>
  );
};
