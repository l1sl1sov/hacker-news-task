import { Outlet } from 'react-router';
import { Header } from './Header';

export const MainLayout = () => {
  return (
    <div className="w-screen h-screen flex flex-col overflow-y-auto scrollbar-thin [scrollbar-color:var(--color-primary)_transparent]">
      <div className="mx-auto w-full max-w-360 px-4 sm:px-6 flex flex-col flex-1">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
