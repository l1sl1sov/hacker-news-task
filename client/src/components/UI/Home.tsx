import { SelectFilter } from '../SelectFilter';
import { NewsList } from '../NewsList';
import { Header } from './Header';

export const Home = () => {
  return (
    <div className="mx-auto w-full max-w-360 px-4 sm:px-6">
      <Header />
      <SelectFilter />
      <NewsList />
    </div>
  );
};
