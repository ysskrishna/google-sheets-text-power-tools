import { defineConfig } from 'astro/config';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: 'https://ysskrishna.github.io',
  base: isProd ? '/google-sheets-text-power-tools/' : '/',
  build: {
    format: 'file',
  },
});
