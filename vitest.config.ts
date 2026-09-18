import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./packages/ui/src/__tests__/setup.ts'],
    include: ['packages/**/src/**/*.test.{ts,tsx}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        '**/*.d.ts',
        '**/*.config.*',
        '**/mocks/**',
        '**/vendor/**',
      ],
    },
  },
  resolve: {
    alias: {
      '@randee/ui': path.resolve(__dirname, './packages/ui/src'),
      '@randee/db': path.resolve(__dirname, './packages/db/src'),
      '@randee/i18n': path.resolve(__dirname, './packages/i18n/src'),
    },
  },
});
