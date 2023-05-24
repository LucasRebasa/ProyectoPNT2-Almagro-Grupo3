<script setup>
import { useCounterStore } from "../stores/counter.js";
import { storeToRefs } from "pinia";
const store = useCounterStore();
const { nombre, mail } = storeToRefs(store);

function mostrarAlerta(mensaje) {
  alert(mensaje);
}
</script>

<template>
  <form class="container">
    <div class="input-group">
      <span class="input-group-text">Nombre</span>
      <input type="text" class="form-control" v-bind:value="nombre" disabled />
    </div>
    <div class="input-group">
      <span class="input-group-text">Apellido</span>
      <input
        type="text"
        class="form-control"
        placeholder="Ingrese su apellido"
      />
    </div>
    <div class="input-group">
      <span class="input-group-text">Documento de Identidad</span>
      <input type="text" class="form-control" placeholder="DNI" />
    </div>

    <div class="input-group">
      <span class="input-group-text">Selecciona una fecha</span>
      <input type="datetime-local" class="form-control" placeholder="Fecha" />
    </div>

    <div class="input-group">
   
        <select  class="form-select" aria-label="Default select example">
          <option disabled selected hidden >Selecciona la especialidad</option>
          <option>Traumatologia</option>
          <option>Otorrino</option>
          <option>Dermatologia</option>
        </select>
      </div>
      <div class="input-group">
        <span class="input-group-text">Email</span>
        <input type="mail" class="form-control" v-bind:placeholder="mail" />
      </div>
    </form>
    <div class="botones">
    <button
      class="btn btn-outline-secondary"
      type="button"
      @click="mostrarAlerta('Turno confirmado')"
    >
      Confirmar turno
    </button>

    <RouterLink to="/Inicio"
      ><button class="btn btn-outline-secondary" type="button">
        Volver al inicio
      </button>
    </RouterLink>

  </div> 
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

.botones{
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
