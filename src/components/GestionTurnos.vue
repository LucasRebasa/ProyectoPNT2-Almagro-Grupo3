<script setup>
import { RouterLink } from "vue-router";
import { useCounterStore } from "../stores/counter.js";
import { storeToRefs } from "pinia";
const store = useCounterStore();
const { turnos } = storeToRefs(store);
const {eliminarTurno} = store;
</script>

<template>
  <div>
    <h2>Listado de Turnos</h2>
    <div class="card text-center" v-for="turno in turnos">
  <div class="card-header">
    Turno
  </div>
  <div class="card-body">
    <h5 class="card-title">{{turno.especialidadTurno }}</h5>
    <p class="card-text">{{turno.fechaTurno}}</p>
    <p class="card-text">{{turno.horaTurno}}</p>
    <a href="#" class="btn btn-primary" @click="eliminarTurno(turno)">Eliminar turno</a>
  </div>
  <div class="card-footer text-muted">
    <p>Todos los derechos reservados © 2023 <b>CuidApp </b></p>
  </div>
</div>
<div class="botones">
<RouterLink to="/InicioMedico"
      ><button class="btn btn-outline-secondary" type="button">
        Volver
      </button>
      
    </RouterLink>
</div>

</div>

</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
  margin-top: 45px;
  text-align: center;
}

h2{
  text-align: center;
}

.container {
  display: flex;
  flex-direction: column;
}

.grid-container {
  display: grid;
}

button {
  margin: auto;
  display: flex;
  flex-direction: column;
  margin: 15px;
  padding: 20px

}

a{
  text-decoration: none;
}

li {
  list-style: none;
}
.text-center{
  margin: 25px;
}

.botones{
  display: flex;
  justify-content: center;
  margin-top: 5%;
}
</style>
