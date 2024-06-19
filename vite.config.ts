import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://api.cloudflare.com/client/v4/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/image': {
        target: 'https://upload.imagedelivery.net',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/image/, ''),
      },
    },
  },
});
