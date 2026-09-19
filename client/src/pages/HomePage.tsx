import { SelectFilter } from '@/components/SelectFilter';
import { NewsList } from '@/components/NewsList';

export const HomePage = () => {
  return (
    <>
      <SelectFilter />
      <NewsList />
    </>
  );
};
