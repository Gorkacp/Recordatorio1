<template>
  <div id="app">
    <!-- Componente de la cabecera -->
    <Cabecera />
    <!-- Vista del enrutador -->
    <router-view />
    <!-- Componente del pie de página -->
    <Footer />
  </div>
</template>

<script>
import Cabecera from './components/Cabecera.vue'; // Importar el componente Cabecera
import Footer from './components/Footer.vue'; // Importar el componente Footer

export default {
  components: {
    Cabecera, // Registrar el componente Cabecera
    Footer // Registrar el componente Footer
  }
}
</script>

<style>
/* Estilos globales para la aplicación */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif; /* Familia de fuentes */
  -webkit-font-smoothing: antialiased; /* Suavizado de fuentes para WebKit */
  -moz-osx-font-smoothing: grayscale; /* Suavizado de fuentes para OS X */
  text-align: center; /* Alinear el texto al centro */
  color: #2c3e50; /* Color del texto */
  margin-top: 60px; /* Margen superior */
}
</style>