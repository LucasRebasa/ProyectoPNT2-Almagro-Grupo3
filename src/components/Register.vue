<script setup>


</script>

<template>
    <form class="container">
        <div class="input-group">
            <span class="input-group-text">Nombre</span>
            <input type="text" class="form-control" placeholder="Ingrese su nombre">
        </div>
        <div class="input-group">
            <span class="input-group-text">Apellido</span>
            <input type="text" class="form-control" placeholder="Ingrese su apellido">
        </div>
        <div class="input-group">
            <span class="input-group-text">Documento de Identidad</span>
            <input type="text" class="form-control" placeholder="DNI">
        </div>
        <div class="input-group">
            <span class="input-group-text">Email</span>
            <input type="mail" class="form-control" placeholder="Ingrese su email">
        </div>

        <div class="input-group">
            <input type="text" class="form-control" placeholder="Ingrese una contraseña">
            <span class="input-group-text">Contraseña</span>
        </div>

        <div class="input-group">
            <input type="text" class="form-control" placeholder="Ingrese una contraseña">
            <span class="input-group-text">Confirmar contraseña</span>
        </div>

        </form>
      <div class="router">
         <RouterLink to="/"><button class="btn btn-outline-secondary" type="button">Registrarse</button></RouterLink>
         <RouterLink to="/"><button class="btn btn-outline-secondary" type="button">Volver al inicio</button></RouterLink>
     </div>

      
</template>


<style scoped>
div {
    margin: 20px;
    align-items: center;
}

.input-group{
    width: 60%;
}
.container {
    margin-top: 2%;
    display: flex;
    align-items: center;
    flex-direction: column;
}

button {
    margin: 15px;
    padding: 20px
}

.router{
    margin-top: 50px;
    display: flex;
    justify-content: center;
}
</style>