import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        index: 'src/index.js'
      },
      output: {
        entryFileNames: '[name].js'
      }
    }
  }
});
