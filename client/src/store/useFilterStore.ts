import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { createJSONStorage } from 'zustand/middleware';
import { FILTER_OPTIONS } from '../constants/filters';
import type { filterType } from '../types/newsTypes';

interface FilterStoreI {
  filter: filterType;
  setFilter: (newFilter: filterType) => void;
}

const useFilterStore = create<FilterStoreI>()(
  persist(
    (set) => ({
      filter:
        (localStorage.getItem('filter') as filterType) || FILTER_OPTIONS[0],
      setFilter: (newFilter) => {
        set(() => ({ filter: newFilter }));
      },
    }),
    {
      name: 'filter-store',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export const useFilterSelector = () => useFilterStore((state) => state.filter);
export const useSetFilterSelector = () =>
  useFilterStore((state) => state.setFilter);
