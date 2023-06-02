<script setup>
import { useCounterStore } from "../stores/counter.js";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const store = useCounterStore();
const { login } = store;
const nombre = ref("");
const mail = ref("");
</script>

<template>
  <div class="container">
    <div class="input-group">
      <input
        type="text"
        class="form-control"
        placeholder="Tu mail"
        v-model="mail"
      />
      <span class="input-group-text">@example.com</span>
    </div>
    
    <div class="input-group">
      <span class="input-group-text">Contraseña</span>
      <input
        type="password"
        class="form-control"
        placeholder="Ingresa aqui tu contraseña"
        v-model="nombre"
      />
    </div>

    <RouterLink to="/Inicio"
      ><button
        @click="login(nombre, mail)"
        type="button"
        class="btn btn-outline-secondary"
      >
        Ingresar
      </button></RouterLink
    >

    <RouterLink to="/"
      ><button type="button" class="btn btn-danger" id="btnVolver">
        Volver al inicio
      </button></RouterLink
    >
  </div>
</template>
<style scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
}
div{
    margin-top: 25px;
}

button {
  margin: 15px;
  padding: 20px;
}
</style>
