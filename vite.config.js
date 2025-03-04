import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === 'production' ? '/<Recordatorio1>/' : '/', // Reemplaza <REPO_NAME> con el nombre de tu repositorio
});