<script setup>
import { RouterLink } from 'vue-router';
import { useCounterStore } from "../stores/counter.js"
import { storeToRefs } from "pinia";
const store = useCounterStore();
const { nombre,email,dni,apellido } = storeToRefs(store)
</script>

<template>
  
  <div class="container">
    <h5 class="card-title">Estos son tus datos personales</h5>
   <br>
   <div class="card" style="width: 18rem;">
   
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="../img/messi.jpg" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title"></h5>
    <p class="card-text">Nombre: {{nombre}}</p>
    <p class="card-text">Apellido: {{apellido}}</p>
    <p class="card-text">DNI: {{dni}}</p>
    <p class="card-text">Email: {{email}}</p>
    <a href="#" class="btn btn-primary">Editar</a>
  </div>
</div>
</div>
   <RouterLink to="/InicioUsuario"><button class="btn btn-outline-secondary" type="button">Volver</button></RouterLink>
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