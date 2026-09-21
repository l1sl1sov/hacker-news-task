import { Outlet } from 'react-router';
import { Header } from '@/components/UI/Header';

export const MainLayout = () => {
  return (
    <div className="min-h-screen pb-6 flex flex-col">
      <Header />
      <div className="mx-auto w-full max-w-360 px-4 sm:px-6 flex flex-col flex-1">
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
