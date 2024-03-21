import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url'; // Import necessary modules

export default defineConfig({
  plugins: [
    vue(),
  ],
  server: {
    port: 8080 // Change this to your desired port number
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});