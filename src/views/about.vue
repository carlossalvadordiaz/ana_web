<template>
<div class="fondo">

<!-- <div class="imagen">
  <img style="width: 100%; height: 100%" alt="animales" src="../assets/about.jpg">
</div> -->

<div class="sobre mi">
    <!-- <h1>Ana García Romero de Ávila</h1> -->

    <img class="img" src="../assets/ana.jpg" alt="">
    <!-- <h2>Estudiante de blablablabla</h2> -->
    <div class="center">
        <p style="font-size: 20px">Me llamo Ana García Romero de Ávila y soy estudiante de cuarto año de Magisterio de Educación Infantil en la UAH. <br><br>
            He desarrollado esta creativa página web dedicada a la asignatura Web 2.0 y Competencia Digital en Educación. Esta asignatura permite elaborar un proyecto propio de Internet. <br><br>
            Entre varias ideas que tenía en mente, elegí esta opción de página web de entretenimiento. Sirve para realizar diferentes test de personalidad que te dirán cuál es tu animal de poder, qué signo será tu media naranja y qué famoso te representa. <br> <br> El fin de esta página web es entretener y hacer disfrutar a las personas que la visiten.
        </p>
    </div>
</div>
</div>
</template>

<script>
export default {


}
</script>

<style scoped>

.fondo {
  background-image: url("../assets/prueba2.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; 
  /* height: 50vh; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100vh;
}
.imagen {
  width: 100%;
  height: 70vh;
}

.img {
  width: 250px;
  height: 310px;
  margin-bottom: 2%;
  margin-top: 2%;
}

.center {
    max-width: 50%;
    margin: 0 auto;
}

</style>