import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/advancedJS_quote-generator/',
  build: {
    outDir: 'build',
  },
});
