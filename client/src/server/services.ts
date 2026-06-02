import { api } from './base';
import type { filterType } from '../types/newsTypes';
import pLimit from 'p-limit';

export const fetchNewsIdsService = async (
  filter: filterType,
): Promise<number[]> => {
  const response = await api.get<number[]>(filter);
  return response.data;
};

export const fetchNewsService = async (pageIds: number[]) => {
  if (pageIds.length === 0) return [];
  const limit = pLimit(3);
  const newsPromises = pageIds.map((id) =>
    limit(async () => {
      const response = await api.get(`item/${id}`);
      return response.data;
    }),
  );
  const results = await Promise.all(newsPromises);
  return results;
};
