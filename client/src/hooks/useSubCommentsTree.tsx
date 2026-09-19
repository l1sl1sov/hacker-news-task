import { useQuery, useQueryClient } from '@tanstack/react-query';
import { keepPreviousData } from '@tanstack/react-query';
import { useEffect } from 'react';
import { APP_CONFIG } from '@constants/base';
import { fetchRecursiveComments } from '@utils/fetchRecursiveComments';
import type { CommentNodeI } from '@typesal/newsTypes';

export const useSubCommentsTree = (
  rootKids: number[] | undefined,
  isEnabled: boolean,
) => {
  const activeIds = rootKids || [];
  const queryClient = useQueryClient();
  const queryKey = ['commentBranchTree', activeIds];

  useEffect(() => {
    if (!isEnabled && activeIds.length > 0) {
      queryClient.cancelQueries({ queryKey });
    }
  }, [isEnabled, queryKey, queryClient, activeIds.length]);

  return useQuery<CommentNodeI[], Error>({
    queryKey,
    queryFn: ({ signal }) => fetchRecursiveComments(activeIds, signal),
    enabled: isEnabled && activeIds.length > 0,
    placeholderData: keepPreviousData,
    staleTime: APP_CONFIG.STALE_TIME_MS,
    gcTime: 3 * 60 * 1000,
    refetchInterval: isEnabled ? APP_CONFIG.REFETCH_INTERVAL_MS : false,
    refetchOnWindowFocus: false,
  });
};
