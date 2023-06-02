<script setup>
import { RouterLink } from 'vue-router';
import { useCounterStore } from "../stores/counter.js"
import { storeToRefs } from "pinia";
const store = useCounterStore();
const { nombre,mail } = storeToRefs(store)
</script>

<template>
  <div class="container">
   <br>
   <div class="card" style="width: 18rem;">
   <div class="card-body">
    <h5 class="card-title">Tus datos personales</h5>
    <p class="card-text">{{nombre}}</p>
    <p class="card-text">{{mail}}</p>
    <a href="#" class="btn btn-primary">Editar</a>
  </div>
</div>
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