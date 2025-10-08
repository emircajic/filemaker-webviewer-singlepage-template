import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
  plugins: [viteSingleFile()],
  base: '',
  build: {
    outDir: 'dist',
    assetsInlineLimit: 100000000, // Inline all assets
    cssCodeSplit: false,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      }
    }
  },
  server: {
    open: true
  }
});
