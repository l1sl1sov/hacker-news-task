import { SelectFilter } from './components/SelectFilter';
import { NewsList } from './components/NewsList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SelectFilter />
      <NewsList />
    </QueryClientProvider>
  );
}

export default App;
