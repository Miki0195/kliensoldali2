import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Force rollup to use JS version instead of native
    }
  },
  define: {
    global: 'globalThis',
  }
})

// Disable native rollup
process.env.ROLLUP_NATIVE = 'false'
