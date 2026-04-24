import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    allowedHosts: ['overview-jailhouse-monday.ngrok-free.dev'],
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
