import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import withReactRouter from 'vite-plugin-next-react-router';
import path from 'path';
// https://vite.dev/config/

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd()); // import.meta.env undefined 오류로 인해 loadEnv를 사용하여 env 객체 생성
  return {
    server: {
      proxy: {
        '/api': {
          target: env.VITE_API_URL, // 로컬
          changeOrigin: true,
        },
      },
    },
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
  };
});
