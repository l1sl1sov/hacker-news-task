import { Button } from '@components/UI/Button';
import { Link } from 'react-router';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full mb-4 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-2xs select-none">
      <div className="mx-auto w-full max-w-360 h-16 px-4 sm:px-6 flex items-center justify-between py-2">
        <Link to="/" className="flex items-center gap-3">
          <div className="relative flex items-center justify-center h-8 w-8">
            <div className="absolute inset-0 bg-primary-glow rounded-full blur-sm opacity-75" />
          </div>
          <span className="text-lg font-bold text-gray-900 tracking-tight">
            Hacker <span className="text-primary">News</span>
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden sm:flex items-center gap-4 text-xs font-semibold text-gray-500">
            <a href="#" className="hover:text-gray-900 transition-colors">
              Threads
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors">
              Past
            </a>
          </nav>

          <span className="hidden sm:block h-4 w-px bg-gray-200" />

          <Button
            variant="outline"
            size="sm"
            onClick={() => console.log('Sign in clicked')}
          >
            Sign in
          </Button>
        </div>
      </div>
    </header>
  );
};
