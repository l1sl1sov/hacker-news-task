import { FILTER_OPTIONS } from '../constants/filters';
import type { filterType } from '../types/newsTypes';
import {
  useFilterSelector,
  useSetFilterSelector,
} from '../store/useFilterStore';
import { formatFilterName } from '../utils/formatFilterName';

export const SelectFilter = () => {
  const currentFilter = useFilterSelector();
  const setFilter = useSetFilterSelector();

  const handleFilterChange = (filterParam: filterType) => {
    setFilter(filterParam);
  };

  const activeIndex = FILTER_OPTIONS.indexOf(currentFilter);

  return (
    <div className="pb-4 w-full select-none">
      <div
        style={{ '--active-index': activeIndex } as React.CSSProperties}
        className="relative grid grid-cols-3 w-full p-1.5 bg-white border border-gray-200 rounded-xl shadow-xs"
      >
        {FILTER_OPTIONS.map((filterParam, index) => {
          const id = `radio-${index}`;
          const isChecked = currentFilter === filterParam;

          return (
            <div key={index} className="relative z-10 w-full text-center">
              <input
                type="radio"
                id={id}
                name="tabs"
                checked={isChecked}
                onChange={() => handleFilterChange(filterParam as filterType)}
                className="hidden"
              />

              <label
                htmlFor={id}
                className={`flex items-center justify-center h-12 w-full text-md font-medium rounded-xs cursor-pointer transition-colors duration-150 ease-in
                  ${isChecked ? 'text-primary' : 'text-gray-500 hover:text-gray-900'}`}
              >
                {formatFilterName(filterParam)}
              </label>
            </div>
          );
        })}
        <span className="absolute top-0 bottom-0 left-0 w-[calc(100%/3)] p-1.5 z-0 transition-transform duration-250 ease-out translate-x-[calc(var(--active-index)*100%)]">
          <span className="w-full h-full block bg-primary-light rounded-xl" />
        </span>
      </div>
    </div>
  );
};
