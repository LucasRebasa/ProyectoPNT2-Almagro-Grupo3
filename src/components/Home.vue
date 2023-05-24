<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="Jumbotron" >
    
    <div>
     
     <img src="https://i.ibb.co/WgjPgWD/85382643e7144e2e88018c8faa930790-2.png" alt="85382643e7144e2e88018c8faa930790-2"><br />
     <h1>Hola !</h1>
     <h4>iniciá sesión o <a>crea una cuenta</a></h4>
     <RouterLink to="/login"><button class="btn btn-outline-secondary" type="button">Log-in</button></RouterLink>
     <RouterLink to="/Registrar"><button class="btn btn-outline-secondary" type="button">Registrarse</button></RouterLink>
     

   </div>
  </div>
  
 
  
</template>

<style scoped>


h1 {
  font-weight: 500;
  font-size: 2.6rem;
  margin-top: 0px;
  margin-bottom:20px;
  text-align: center;
}
h4 {
  font-size: medium;
  margin-bottom: 15px;
}
div{
  display: flex;
  align-items: center;
  flex-direction: column;
}
button{
  margin: 15px;
  padding: 20px
}





</style>
