import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    deps: {
      // @ts-ignore vitest 0.33
      experimentalOptimizer: {
        ssr: { enabled: true },
        web: { enabled: true },
      },
      // @ts-ignore vitest 0.34
      optimizer: {
        ssr: { enabled: true },
        web: { enabled: true },
      },
    },
    environment: 'jsdom',
  },
  resolve: {
    alias: [{
      find: /(\.md)$/,
      replacement: '$1',
      async customResolver(source, importer, options) {
        console.log(`resolve.alias | running custom resolver for ${source}`)
      },
    }]
  }
});
