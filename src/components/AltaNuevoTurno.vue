<script setup>
import { useCounterStore } from "../stores/counter.js";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import router from "../router/index"
const store = useCounterStore();
const { nuevoTurno, nombre, apellido, dni } = store;
const fecha = ref("");
const horario = ref("");
const especialidad = ref("");
const mail = ref("");
const medico = ref("");

function validarTurno(fecha, especialidad, mail) {
  if(fecha != null && mail != null && especialidad != null){
    nuevoTurno(fecha.split('T')[0], fecha.split('T')[1], especialidad)
    window.alert("Turno creado correctamente")
    router.push({ path: '/InicioUsuario' });
  }  
}
</script>

<template>
  <form class="container" v-on:submit.prevent>
    <div class="input-group">
      <span class="input-group-text">Nombre</span>
      <input type="text" class="form-control"  disabled  v-bind:value="nombre"/>
    </div>
    <div class="input-group">
      <span class="input-group-text">Apellido</span>
      <input
      disabled
        v-bind:value="apellido"
        type="text"
        class="form-control"
        placeholder="Ingrese Apellido" required/>
      
    </div>
    <div class="input-group">
      <span class="input-group-text">Documento de Identidad</span>
      <input type="text" class="form-control" disabled placeholder="DNI" required v-bind:value="dni"/>
    </div>
    
    <div class="input-group">
      <span class="input-group-text" >Seleccioná una especialidad</span>
      <select
        class="form-select"
        aria-label="Default select example"
        v-model="especialidad"
        required
      >
        <option>Otorrinolaringolia</option>
        <option>Odontologia</option>
        <option>Kinesiologia</option>
      </select>
    </div>

    <div class="input-group" v-show="especialidad">
      <span class="input-group-text" >Seleccioná un médico</span>
      <select
        class="form-select"
        aria-label="Default select example"
        v-model="medico"
        required
      >
     
        <option>Lionel Messi</option>
        <option>Julian Alvarez</option>
        <option>Gonzalo Montiel</option>
      </select>
    </div>

    <div class="input-group" v-show="medico">
      <span class="input-group-text" >Selecciona una fecha</span>
      <input
        type="datetime-local"
        class="form-control"
        placeholder="Fecha"
        v-model="fecha"
        required
      />
    </div>

    <div class="input-group" v-show="fecha">
      <span class="input-group-text" >Selecciona un horario</span>
      <input
        type="datetime-local"
        class="form-control"
        placeholder="Fecha"
        v-model="horario"
        required
      />
    </div>

    
    <div class="input-group" v-show="fecha">
      <span class="input-group-text">Email</span>
      <input type="mail" class="form-control" v-bind:value="mail" required/>
    </div>
    <div class="botones">
    <button
      class="btn btn-outline-secondary"
      type="submit"
      @click="
        validarTurno(fecha,especialidad,mail)"
    >
      Confirmar turno
    </button>

    <RouterLink to="/InicioUsuario"
      ><button class="btn btn-outline-secondary" type="button">
        Volver al inicio
      </button>
    </RouterLink>
  </div>
  </form>
</template>

<style scoped>
div {
  margin: 20px;
  align-items: center;
}

.container {
  margin-top: 2%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.botones {
  display: flex;
  justify-content: center;
  margin-top: 5%;
}
button {
  margin: 15px;
  padding: 20px;
}
.calendar {
  position: relative;
  display: inline-block;
}

.calendar .dropdown {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  padding: 8px;
}

.calendar:hover .dropdown {
  display: block;
}
</style>
