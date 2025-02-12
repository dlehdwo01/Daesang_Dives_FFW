import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import withReactRouter from 'vite-plugin-next-react-router';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // @/를 src 폴더로 매핑
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    withReactRouter({
      pageDir: 'src/pages',
      extensions: ['tsx'],
      layout: '_layout',
    }),
  ],
});
