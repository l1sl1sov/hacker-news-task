import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { getItemService } from '../server/services';
import { APP_CONFIG } from '../constants/base';
import { NewDetails } from '../components/NewDetails';
import { NotFoundPage } from './NotFoundPage';

export const NewDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const numericId = id ? Number(id) : NaN;

  const {
    data: activeStory,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['newsItem', numericId],
    queryFn: () => getItemService(numericId),
    enabled: !isNaN(numericId),
    staleTime: 60000,
    gcTime: 3 * 60 * 1000,
    refetchInterval: APP_CONFIG.REFETCH_INTERVAL_MS,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error || !activeStory || !id) return <NotFoundPage />;

  return <NewDetails data={activeStory} />;
};
