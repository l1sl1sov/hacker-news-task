import { HomePage } from './pages/HomePage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Routes } from 'react-router';
import { NewDetailsPage } from './pages/NewDetailsPage';
import { MainLayout } from './components/UI/MainLayout';
import { NotFoundPage } from './pages/NotFoundPage';
<<<<<<< HEAD
=======
import { UserProfilePage } from './pages/UserProfilePage';
>>>>>>> feature/user-profile

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/item/:id" element={<NewDetailsPage />} />
<<<<<<< HEAD
=======
          <Route path="/user/:username" element={<UserProfilePage />} />
>>>>>>> feature/user-profile
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
