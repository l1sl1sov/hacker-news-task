import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { createJSONStorage } from 'zustand/middleware';
import { FILTER_OPTIONS } from '@constants/filters';
import type { filterType } from '@typesal/newsTypes';

interface FilterStoreI {
  filter: filterType;
  setFilter: (newFilter: filterType) => void;
}

//filter determines what url to load (/bestnews, /topnews and etc)
export const useFilterStore = create<FilterStoreI>()(
  persist(
    (set) => ({
      filter: FILTER_OPTIONS[0],
      setFilter: (newFilter) => {
        set(() => ({ filter: newFilter }));
      },
    }),
    { name: 'filter-store', storage: createJSONStorage(() => localStorage) },
  ),
);

export const useFilterSelector = () => useFilterStore((state) => state.filter);
export const useSetFilterSelector = () =>
  useFilterStore((state) => state.setFilter);
