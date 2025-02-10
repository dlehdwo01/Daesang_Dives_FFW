import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import withReactRouter from 'vite-plugin-next-react-router';

// https://vite.dev/config/
export default defineConfig({
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
