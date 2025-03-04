import { createApp } from 'vue'; // Importar la función createApp de Vue
import App from './App.vue'; // Importar el componente raíz App
import router from './router'; // Importar el enrutador de Vue

// Crear una instancia de la aplicación de Vue, usar el enrutador y montar la aplicación en el elemento con id "app"
createApp(App).use(router).mount('#app');