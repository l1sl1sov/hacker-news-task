import { keepPreviousData, useQueries, useQuery } from '@tanstack/react-query';
import { getIdsService, getItemService } from '@/server/services';
import type { filterType } from '@typesal/newsTypes';
import { APP_CONFIG } from '@constants/base';
import { useState, useEffect, useMemo } from 'react';

export const useStories = (filter: filterType) => {
  const pageSize = APP_CONFIG.ITEMS_PER_PAGE;
  const limit = APP_CONFIG.ITEMS_LIMIT;

  const [visibleCount, setVisibleCount] = useState<number>(pageSize);

  //if filter changes then reload pagesize param
  useEffect(() => {
    setVisibleCount(pageSize);
  }, [filter, pageSize]);

  const {
    data: newsIds,
    isLoading: isLoadingIds,
    isFetching: isFetchingIds,
    refetch: refetchIds,
  } = useQuery({
    queryKey: ['newsIds', filter],
    queryFn: () => getIdsService(filter),
    staleTime: Infinity,
    gcTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchInterval: APP_CONFIG.REFETCH_INTERVAL_MS,
  }); //the API doesnt give me an ability to load all the items - it gives only ids map

  //to apply new items amount for page
  const activeIds = newsIds?.slice(0, visibleCount) || [];

  //now i load all items per page by their ids
  const queries = useMemo(() => {
    return activeIds.map((id) => ({
      queryKey: ['newsItem', id],
      queryFn: ({ signal }: { signal: AbortSignal }) =>
        getItemService(id, signal),
      enabled: !!newsIds && activeIds.length > 0,
      placeholderData: keepPreviousData,
      staleTime: 60000,
      gcTime: 3 * 60 * 1000,
      refetchInterval: APP_CONFIG.REFETCH_INTERVAL_MS,
      refetchOnWindowFocus: false,
    }));
  }, [activeIds, newsIds]);
  const results = useQueries({ queries });

  //for hard refetch button
  const refetchNews = async () => {
    await refetchIds();
    results.forEach((r) => r.refetch());
    console.log('refetching after await');
  };

  const news = useMemo(() => {
    return results.map((result) => result.data).filter(Boolean);
  }, [results]);
  const isFetchingNews = isFetchingIds || results.some((r) => r.isFetching);
  const isPlaceholderData = results.every((result) => result.isPlaceholderData);

  //consts for pagination
  const totalAvailable = newsIds?.length || 0;
  const hasMore = visibleCount < totalAvailable;

  const reachedClickThreshold = visibleCount >= limit;

  //function for load more button when the infinity scroll's limit is reached
  const loadMore = () => {
    if (!hasMore || isFetchingNews) return;

    setVisibleCount((prev) => prev + pageSize);
  };

  return {
    news,
    isLoading: isLoadingIds || (news.length === 0 && isFetchingNews),
    isFetchingNews,
    isPlaceholderData,
    hasMore,
    showLoadMoreButton: hasMore && reachedClickThreshold,
    loadMore,
    refetchNews,
  };
};
