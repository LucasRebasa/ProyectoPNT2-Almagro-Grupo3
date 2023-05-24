
<script setup>
import { useCounterStore } from "../stores/counter.js"
import { storeToRefs } from "pinia";
const store = useCounterStore();
const { nombre } = storeToRefs(store)
</script>

<template>
 <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
  <div>
    <img src="../img/iconoNav.png" id="imagenNav">
    <a class="navbar-brand" href="/">CuidApp</a>
 </div>
  
  
  <button v-show="nombre!==''" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Inicio <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Salir</a>
      </li>
    </ul>
  </div>
</nav>
</template>

<style scoped>
  
  img{
    width: 8%;
    height: 4%;
    margin: 5px 20px;
  }

  a{
    font-weight: bold;
  }
 
</style>

