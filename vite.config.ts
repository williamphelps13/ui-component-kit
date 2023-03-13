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
  }
});
