// vitest.test-unit.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['**/*.test-unit.ts'],
  },
});
