import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ghPages from 'vite-plugin-gh-pages';

export default defineConfig({
  plugins: [react(), ghPages()],
  base: '/Lalit-Kumar-Portfolio/', // Replace <repository-name> with your GitHub repository name
});