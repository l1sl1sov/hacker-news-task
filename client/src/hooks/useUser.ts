import { getUserService } from '../server/services';
import { useQuery } from '@tanstack/react-query';

export const useUser = (username: string) => {
  const {
    data: userData,
    isLoading: isLoadingUser,
    isFetching: isFetchingUser,
  } = useQuery({
    queryKey: ['user', username],
    queryFn: () => getUserService(username),
    gcTime: 5 * 60 * 1000,
  });

  return {
    userData,
    isLoadingUser,
    isFetchingUser,
  };
};
