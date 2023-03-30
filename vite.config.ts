/// <reference types="vitest" />
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:
          '@use "src/lib/components/variables/options.scss" as *; @use "src/lib/components/normalize.scss" as *;'
      }
    }
  },
  test: {
    testTimeout: 10000,
    globals: true,
    reporters: ['verbose'],
    outputFile: './tests/report.html',
    coverage: {
      reporter: ['text', 'html'],
      reportsDirectory: './tests/coverage'
    }
  }
});
