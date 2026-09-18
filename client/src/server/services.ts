import { api } from './base';
import type { filterType } from '../types/newsTypes';

export const getIdsService = async (filter: filterType): Promise<number[]> => {
  const response = await api.get<number[]>(filter.toLowerCase());
  return response.data;
};

//for stories and comments
export const getItemService = async (id: number, signal?: AbortSignal) => {
  const response = await api.get(`item/${id}`, { signal });
  return response.data;
};

export const getUserService = async (username: string) => {
  const response = await api.get(`user/${username}`);
  return response.data;
};
