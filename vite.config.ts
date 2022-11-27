import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import tsConfigPaths from 'vite-tsconfig-paths';
import * as packageJson from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'classic',
    }),
    tsConfigPaths(),
    dts({
      include: ['./src/lib/'],
    }),
  ],
  build: {
    lib: {
      entry: './src/lib/index.ts',
      name: 'react-step-wiz',
      formats: ['es', 'umd'],
      fileName(format) {
        return `react-step-wiz.${format}.js`;
      },
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
      output: {
        globals: {
          react: 'React',
        },
        exports: 'named',
      },
    },
  },
});
