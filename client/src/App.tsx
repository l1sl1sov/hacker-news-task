import { HomePage } from './pages/HomePage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Routes } from 'react-router';
import { NewDetailsPage } from './pages/NewDetailsPage';
import { MainLayout } from './components/UI/MainLayout';
import { NotFoundPage } from './pages/NotFoundPage';
import { UserProfilePage } from './pages/UserProfilePage';

export const queryClient = new QueryClient();
export const ii = '';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/item/:id" element={<NewDetailsPage />} />
          <Route path="/user/:username" element={<UserProfilePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
