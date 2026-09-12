import { Outlet } from 'react-router';
import { Header } from './Header';

export const MainLayout = () => {
  return (
    <div className="mx-auto w-full max-w-360 px-4 sm:px-6">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
