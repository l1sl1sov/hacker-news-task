import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { fileURLToPath } from 'url';

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
      '@': path.resolve(__dirname, 'src'),
      '@components': fileURLToPath(
        new URL('./src/components', import.meta.url),
      ),
      '@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
      '@typesal': fileURLToPath(new URL('./src/types', import.meta.url)),
      '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
      '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
      '@store': fileURLToPath(new URL('./src/store', import.meta.url)),
      '@hooks': fileURLToPath(new URL('./src/hooks', import.meta.url)),
      '@constants': fileURLToPath(new URL('./src/constants', import.meta.url)),
    },
  },
});
