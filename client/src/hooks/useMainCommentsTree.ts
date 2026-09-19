import { useQueries } from '@tanstack/react-query';
import { getItemService } from '@/server/services';
import { APP_CONFIG } from '@constants/base';
import { useMemo } from 'react';
import type { UseQueryResult } from '@tanstack/react-query';
import type { NewItemI } from '@typesal/newsTypes';
import { keepPreviousData } from '@tanstack/react-query';

export const useMainCommentsTree = (rootCommentIds: number[] | undefined) => {
  const activeIds = rootCommentIds || [];

  //memo so urls dont recreate
  const queries = useMemo(() => {
    return activeIds.map((id) => ({
      queryKey: ['commentItem', id],
      //signal for cancel
      queryFn: ({ signal }: { signal: AbortSignal }) =>
        getItemService(id, signal),
      enabled: activeIds.length > 0,
      placeholderData: keepPreviousData,
      staleTime: 60000,
      gcTime: 3 * 60 * 1000,
      refetchInterval: APP_CONFIG.REFETCH_INTERVAL_MS,
      refetchOnWindowFocus: false,
    }));
  }, [activeIds]);

  const results: UseQueryResult<NewItemI, Error>[] = useQueries({ queries });

  //some optimization
  const comments = useMemo(() => {
    return results
      .map((result) => result.data)
      .filter((comment): comment is NewItemI => {
        return !!comment && !comment.deleted && !comment.dead;
      });
  }, [results]);

  const isLoading =
    activeIds.length > 0 &&
    comments.length === 0 &&
    results.some((r) => r.isLoading);
  const isFetchingComments = results.some((r) => r.isFetching);

  const refetchComments = async () => {
    const promises = results.map((query) => query.refetch());
    await Promise.all(promises);
  };

  const isPlaceholderData = results.every((result) => result.isPlaceholderData);

  return {
    comments,
    isLoading,
    isFetchingComments,
    refetchComments,
    isPlaceholderData,
  };
};
