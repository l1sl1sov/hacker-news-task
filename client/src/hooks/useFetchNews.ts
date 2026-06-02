import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { fetchNewsIdsService } from '../server/services';
import { fetchNewsService } from '../server/services';
import type { filterType } from '../types/newsTypes';

export const useFetchNews = (
  filter: filterType,
  page: number = 0,
  pageSize: number = 20,
) => {
  const { data: newsIds } = useQuery({
    queryKey: ['newsIds', filter],
    queryFn: () => fetchNewsIdsService(filter),
    staleTime: Infinity,
    gcTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  const start = page * pageSize;
  const end = start + pageSize;
  const pageIds = newsIds?.slice(start, end);

  const {
    data: news,
    isFetching: isFetchingNews,
    isPlaceholderData,
  } = useQuery({
    queryKey: ['news', filter],
    queryFn: () => fetchNewsService(pageIds || []),
    enabled: !!newsIds,
    placeholderData: keepPreviousData,
    staleTime: 60000,
    gcTime: 3 * 60 * 1000,
    refetchInterval: 6 * 10 * 1000,
    refetchOnWindowFocus: false,
  });

  return { news, isFetchingNews, isPlaceholderData };
};
