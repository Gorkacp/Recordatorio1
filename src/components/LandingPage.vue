<template>
  <div class="landing-page">
    <h1>Bienvenido a la Aplicación</h1>
    <p>Esta es la página de inicio donde puedes encontrar información sobre nuestra aplicación.</p>
    <!-- Enlace para iniciar sesión -->
    <router-link to="/login">Iniciar sesión</router-link>
    <!-- Enlace para ver las tareas -->
    <router-link to="/tareas">Ver tareas</router-link>
  </div>
</template>

<script>
export default {
  name: 'LandingPage' // Nombre del componente
}
</script>

