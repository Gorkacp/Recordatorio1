<template>
  <div>
    <h2>Recordatorios</h2>
    <ul>
      <li v-for="recordatorio in recordatorios" :key="recordatorio.id">
        {{ recordatorio.texto }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Recordatorios', // Nombre del componente
  props: {
    recordatorios: {
      type: Array, // Tipo de la propiedad: Array
      required: true // La propiedad es requerida
    }
  }
}
</script>

