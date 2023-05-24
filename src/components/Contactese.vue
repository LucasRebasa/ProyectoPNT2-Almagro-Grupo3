<script setup>
import { RouterLink } from 'vue-router';
import { useCounterStore } from "../stores/counter.js"
import { storeToRefs } from "pinia";
const store = useCounterStore();
</script>

<template>
  <div class="container">
   <h3>Telefono de contacto:(011) 4356-6002</h3>
   <h3>Email de contacto: cuidapp@consultas.com.ar</h3>
    
  </div>
  <RouterLink to="/Inicio"
    ><button class="btn btn-outline-secondary" type="button">
      Volver atras
    </button></RouterLink>
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
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  border-radius: 5px;
}

/*.grid-container{
  display: grid;
  
}*/

button {
  margin: 15px;
  padding: 20px
}
</style>