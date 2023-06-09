<script setup>
import { useCounterStore } from "../stores/counter.js";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import router from "../router/index"

const store = useCounterStore();
const { loginMedico } = store;
const mail = ref("");
const password = ref("");


function validarLogin(mail, password){
  if(mail && password){
    if(loginMedico(mail, password)){
      router.push({path:"/InicioMedico"});
      return;
    }
    window.alert("Usuario no registrado")
  }
}
</script>

<template>
  <div class="container">
    <form action="" v-on:submit.prevent>

    <div class="input-group">
      <input
        type="text"
        class="form-control"
        placeholder="Tu mail"
        v-model="mail"
        required
      />
      <span class="input-group-text">@example.com</span>
    </div>
    
    <div class="input-group">
      <span class="input-group-text">Contraseña</span>
      <input
        type="password"
        class="form-control"
        placeholder="Ingresa aqui tu contraseña"
        v-model="password"
        required
      />
    </div>

    <button
        @click="validarLogin(mail, password)"
        type="submit"
        class="btn btn-outline-secondary"
      >
        Ingresar
    </button>
    

    <RouterLink to="/"
      ><button type="button" class="btn btn-danger" id="btnVolver">
        Volver al inicio
      </button></RouterLink
    >
  </form>
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
