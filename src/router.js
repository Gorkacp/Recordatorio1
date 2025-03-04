import { createRouter, createWebHistory } from 'vue-router'; // Importar funciones para crear el enrutador y el historial web
import LandingPage from './components/LandingPage.vue'; // Importar el componente LandingPage
import Login from './components/Login.vue'; // Importar el componente Login
import ListaTareas from './components/ListaTareas.vue'; // Importar el componente ListaTareas

// Definir las rutas de la aplicación
const routes = [
  { path: '/', component: LandingPage }, // Ruta para la página de inicio
  { path: '/login', component: Login }, // Ruta para la página de inicio de sesión
  { 
    path: '/tareas', 
    component: ListaTareas, 
    props: route => ({ tareas: route.query.tareas ? JSON.parse(route.query.tareas) : [] }) // Pasar las tareas como props
  }
];

// Crear una instancia del enrutador
const router = createRouter({
  history: createWebHistory(), // Usar el historial web para la navegación
  routes // Pasar las rutas definidas
});

export default router; // Exportar el enrutador para usarlo en la aplicación