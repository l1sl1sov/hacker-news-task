import { ComeBackBtn } from '@components/ComeBackBtn';

export const NotFoundPage = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] w-full flex flex-col items-center justify-start pt-24 sm:pt-32 select-none px-4 relative overflow-hidden bg-transparent">
      <div className="absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-primary rounded-full blur-[120px] opacity-20 pointer-events-none mix-blend-screen" />

      <div className="text-center z-10 flex flex-col items-center max-w-md w-full relative">
        <h1
          className="text-8xl sm:text-9xl font-black tracking-widest text-primary"
          style={{
            textShadow: '0 0 20px currentColor, 0 0 40px rgba(0, 0, 0, 0.1)',
          }}
        >
          404
        </h1>

        <h2 className="mt-6 text-base font-bold uppercase tracking-[0.2em] text-gray-800 dark:text-gray-100">
          Not Found
        </h2>

        <p className="mt-3 text-sm font-medium text-gray-400 dark:text-gray-500 max-w-xs leading-relaxed">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <div className="mt-10 w-full flex justify-center">
          <ComeBackBtn />
        </div>
      </div>
    </div>
  );
};
