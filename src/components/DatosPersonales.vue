<script setup>
import { RouterLink } from 'vue-router';
import { useCounterStore } from "../stores/counter.js"
import { storeToRefs } from "pinia";
const store = useCounterStore();
const { nombre,mail } = storeToRefs(store)
</script>

<template>
  <div class="container">
   <h3>Nombre: {{nombre}}</h3>
   <h3>Mail:{{mail}}</h3>
   <RouterLink to="/Inicio"><button class="btn btn-outline-secondary" type="button">Volver</button></RouterLink>
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

.container {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.grid-container{
  display: grid;
  
}

button {
  margin: 15px;
  padding: 20px
}
</style>