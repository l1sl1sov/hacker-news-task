import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api/hn': {
        target: 'https://hacker-news.firebaseio.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/hn/, '/v0'),
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
      '@components': path.resolve(import.meta.dirname, './src/components'),
      '@styles': path.resolve(import.meta.dirname, './src/styles'),
      '@typesal': path.resolve(import.meta.dirname, './src/types'),
      '@pages': path.resolve(import.meta.dirname, './src/pages'),
      '@utils': path.resolve(import.meta.dirname, './src/utils'),
      '@store': path.resolve(import.meta.dirname, './src/store'),
      '@hooks': path.resolve(import.meta.dirname, './src/hooks'),
      '@constants': path.resolve(import.meta.dirname, './src/constants'),
      '@server': path.resolve(import.meta.dirname, './src/server'),
    },
  },
});
