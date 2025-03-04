<template>
  <div class="lista-tareas" v-if="usuario">
    <h1>Lista de Tareas</h1>
    <input v-model="nuevaTarea" @keyup.enter="agregarTarea" placeholder="Nueva tarea" />
    <div>
      <label for="orden">Ordenar por:</label>
      <select id="orden" v-model="criterioOrden">
        <option value="prioridad">Prioridad</option>
        <option value="alfabetico">Alfabético</option>
      </select>
    </div>
    <ul>
      <li v-for="tarea in tareasOrdenadas" :key="tarea.id">
        <span @click="toggleCompletada(tarea)">{{ tarea.completada ? '✔️' : '⭕' }}</span>
        <input v-model="tarea.nombre" @change="guardarTareas" /> <!-- Permitir editar el nombre de la tarea -->
        <select v-model="tarea.prioridad" @change="guardarTareas">
          <option value="Low">Low</option>
          <option value="Normal">Normal</option>
          <option value="High">High</option>
        </select>
        <button @click="eliminarTarea(tarea)">🗑️</button>
      </li>
    </ul>
    <button @click="eliminarCompletadas">Eliminar completadas</button>
    <button @click="cerrarSesion">Cerrar Sesión</button>
  </div>
  <div v-else>
    <p>Por favor, inicia sesión para ver tus tareas.</p>
  </div>
</template>

<script>
import { logout } from '../firebase'; // Importar la función de cierre de sesión de Firebase

export default {
  name: 'ListaTareas',
  data() {
    return {
      nuevaTarea: '', // Almacena el valor de la nueva tarea
      tareas: [], // Almacena la lista de tareas
      criterioOrden: 'prioridad', // Criterio de ordenación de las tareas
      usuario: null // Almacena la información del usuario autenticado
    };
  },
  computed: {
    tareasOrdenadas() {
      // Ordena las tareas según el criterio seleccionado
      if (this.criterioOrden === 'prioridad') {
        return this.tareas.sort((a, b) => {
          const prioridades = { High: 3, Normal: 2, Low: 1 };
          return prioridades[b.prioridad] - prioridades[a.prioridad];
        });
      } else if (this.criterioOrden === 'alfabetico') {
        return this.tareas.sort((a, b) => a.nombre.localeCompare(b.nombre));
      }
      return this.tareas;
    }
  },
  methods: {
    agregarTarea() {
      // Agrega una nueva tarea a la lista
      if (this.nuevaTarea.trim()) {
        this.tareas.push({
          id: Date.now(),
          nombre: this.nuevaTarea,
          prioridad: 'Normal',
          completada: false,
          tiempo: new Date().toLocaleString()
        });
        this.nuevaTarea = ''; // Limpia el campo de entrada
        this.guardarTareas(); // Guarda las tareas en sessionStorage
      }
    },
    toggleCompletada(tarea) {
      // Cambia el estado de completada de una tarea
      tarea.completada = !tarea.completada;
      this.guardarTareas(); // Guarda las tareas en sessionStorage
    },
    eliminarTarea(tarea) {
      // Elimina una tarea de la lista
      this.tareas = this.tareas.filter(t => t.id !== tarea.id);
      this.guardarTareas(); // Guarda las tareas en sessionStorage
    },
    eliminarCompletadas() {
      // Elimina todas las tareas completadas
      this.tareas = this.tareas.filter(t => !t.completada);
      this.guardarTareas(); // Guarda las tareas en sessionStorage
    },
    guardarTareas() {
      // Guarda las tareas en sessionStorage usando el UID del usuario
      if (this.usuario) {
        sessionStorage.setItem(`tareas_${this.usuario.uid}`, JSON.stringify(this.tareas));
      }
    },
    cargarTareas() {
      // Carga las tareas desde sessionStorage usando el UID del usuario
      if (this.usuario) {
        const tareasGuardadas = sessionStorage.getItem(`tareas_${this.usuario.uid}`);
        if (tareasGuardadas) {
          this.tareas = JSON.parse(tareasGuardadas);
        }
      }
    },
    verificarUsuario() {
      // Verifica si hay un usuario autenticado en localStorage
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        this.usuario = user;
        console.log('Usuario verificado:', this.usuario); // Mensaje de depuración
      }
    },
    async cerrarSesion() {
      // Cierra la sesión del usuario
      try {
        await logout(); // Llama a la función de cierre de sesión de Firebase
        this.usuario = null; // Limpia la información del usuario
        this.tareas = []; // Limpia la lista de tareas
        console.log('Sesión cerrada');
      } catch (error) {
        console.error('Error al cerrar sesión:', error);
      }
    }
  },
  created() {
    // Se ejecuta cuando el componente es creado
    this.verificarUsuario(); // Verifica si hay un usuario autenticado
    this.cargarTareas(); // Carga las tareas del usuario autenticado
  }
};
</script>
