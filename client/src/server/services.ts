import { api } from './base';
import type { filterType } from '../types/newsTypes';

export const getIdsService = async (filter: filterType): Promise<number[]> => {
  const response = await api.get<number[]>(filter.toLowerCase());
  return response.data;
};

export const getItemService = async (id: number) => {
  const response = await api.get(`item/${id}`);
  return response.data;
};
