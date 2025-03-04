<template>
  <header>
    <nav>
      <ul>
        <!-- Enlaces de navegación -->
        <li><router-link to="/">Inicio</router-link></li>
        <li><router-link to="/tareas">Tareas</router-link></li>
        <!-- Mostrar "Cerrar Sesión" si el usuario está autenticado -->
        <li v-if="user"><a href="#" @click="handleLogout">Cerrar Sesión</a></li>
        <!-- Mostrar "Iniciar Sesión" si el usuario no está autenticado -->
        <li v-else><router-link to="/login">Iniciar Sesión</router-link></li>
      </ul>
    </nav>
    <h1>Mi Aplicación</h1>
  </header>
</template>

<script>
import { ref, onMounted } from 'vue'; // Importar funciones de Vue
import { useRouter } from 'vue-router'; // Importar el enrutador de Vue
import { auth, logout } from '../firebase'; // Importar autenticación y función de cierre de sesión de Firebase
import { onAuthStateChanged } from 'firebase/auth'; // Importar función para detectar cambios en el estado de autenticación

export default {
  name: 'Cabecera',
  setup() {
    const user = ref(null); // Crear una referencia reactiva para el usuario
    const router = useRouter(); // Obtener una instancia del enrutador

    // Ejecutar cuando el componente se monta
    onMounted(() => {
      // Detectar cambios en el estado de autenticación
      onAuthStateChanged(auth, (currentUser) => {
        user.value = currentUser; // Actualizar la referencia del usuario
      });
    });

    // Función para manejar el cierre de sesión
    const handleLogout = async () => {
      try {
        await logout(); // Llamar a la función de cierre de sesión de Firebase
        user.value = null; // Limpiar la referencia del usuario
        router.push('/'); // Redirigir a la página de inicio
      } catch (error) {
        console.error('Error al cerrar sesión:', error); // Mostrar error en la consola si ocurre
      }
    };

    return {
      user, // Devolver la referencia del usuario para usar en el template
      handleLogout // Devolver la función de cierre de sesión para usar en el template
    };
  }
};
</script>