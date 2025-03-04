<template>
  <div class="login">
    <h1>Iniciar Sesión</h1>
    <button @click="handleGoogleLogin">Iniciar sesión con Google</button>
    <p>¿No tienes una cuenta? <a href="#" @click="handleGoogleRegister">Regístrate</a></p>
  </div>
</template>

<script>
import { ref } from 'vue'; // Importar la función ref de Vue para crear referencias reactivas
import { loginWithGoogle, registerWithGoogle, saveUserToFirestore } from '../firebase'; // Importar las funciones de inicio de sesión, registro y guardar usuario en Firestore
import { useRouter } from 'vue-router'; // Importar el enrutador de Vue

export default {
  name: 'Login', // Nombre del componente
  setup() {
    const router = useRouter(); // Obtener una instancia del enrutador

    // Función para manejar el inicio de sesión con Google
    const handleGoogleLogin = async () => {
      try {
        const user = await loginWithGoogle(); // Llamar a la función de inicio de sesión con Google
        if (user) {
          await saveUserToFirestore(user); // Guardar la información del usuario en Firestore
          router.push('/tareas'); // Redirigir a la página de tareas si el inicio de sesión es exitoso
        }
      } catch (error) {
        console.error('Error al iniciar sesión con Google:', error); // Mostrar error en la consola si ocurre
      }
    };

    // Función para manejar el registro con Google
    const handleGoogleRegister = async () => {
      try {
        const user = await registerWithGoogle(); // Llamar a la función de registro con Google
        if (user) {
          await saveUserToFirestore(user); // Guardar la información del usuario en Firestore
          router.push('/tareas'); // Redirigir a la página de tareas si el registro es exitoso
        }
      } catch (error) {
        console.error('Error al registrarse con Google:', error); // Mostrar error en la consola si ocurre
      }
    };

    return {
      handleGoogleLogin, // Devolver la función de inicio de sesión para usar en el template
      handleGoogleRegister // Devolver la función de registro para usar en el template
    };
  }
};
</script>

