import { resolve } from 'path';

import { defineConfig } from 'vite';

// TODO: with docker compose injecting our environment variables, we will be able
// to create environement-specific configuration of vite
// Env specific things should be in seperate objects and then merged for 
// much easier readability

// import Inspect from 'vite-plugin-inspect';

export default defineConfig({
  // root: 'src',
  publicDir: resolve(__dirname, './public'),
  // envDir: __dirname,
  // plugins: [Inspect()],
  base: '/',
  build: {
    outDir: resolve(__dirname, './dist'),
    // base: '/'
    // sourcemap: true,
    // emptyOutDir: true
    // minify: true,
  },
  esbuild: {
    // minify: true,
    sourcemap: true,
  },
  resolve: {
    alias: {
      // '/': resolve(__dirname, './src'),
      '@': resolve(__dirname, './'),
      '@styles': resolve(__dirname, './assets/styles'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
  },
  server: {
    port: 3000,
  },
});
