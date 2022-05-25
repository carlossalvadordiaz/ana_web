<template>
  <div class="home">
    <img class="img" alt="Vue logo" src="../assets/animales.jpg">
    <HelloWorld msg="Bienvenido/a, ¿Quiéres conocer tu personalidad?"/>
    <div class="animal">
      <h3>TU ANIMAL DE PODER</h3>
      <img class="card" alt="Vue logo" src="../assets/todos.jpg">
          <ul>
            <li><router-link to="/animales"><button class="button-74" role="button">Haz click aquí</button></router-link></li>
          </ul>
    </div>
    <div class="animal">
      <h4 style="margin-bottom: 0.5rem"><b>SIGNO DEL ZODIACO DE TU MEDIA NARANJA</b></h4>
      <img class="card" alt="Vue logo" src="../assets/zod.jpg">
      <ul>
        <li><router-link to="/zodiaco"><button class="button-74" role="button">Haz click aquí</button></router-link></li>
      </ul>
      
    </div>
    <div class="animal">
      <h3>QUÉ FAMOSO TE REPRESENTA</h3>
      <img class="card" alt="Vue logo" src="../assets/fam.jpg">
      
        <ul>
          <li><router-link to="/famosos"><button class="button-74" role="button">Haz click aquí</button></router-link></li>
        </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },

  created() {
    this.$forceUpdate();
    console.log('hola');
  },
  mounted() {
    this.$forceUpdate();
    console.log('adios');
  }
}
</script>

<style scoped>

.card {
  width: 50%;
  height: 50%;
}

.home {
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  margin: 0px;
  padding: 0px;
}
h5 {
  font-weight: bold !important;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  color: white;
}



.animal {
  /* background-color: rgba(100, 148, 237, 0.63); */
  background-image: url("../assets/prueba.jpg");
  border: 2px solid black;
  border-radius: 25px;
  width: 24%;
  margin: 0px;
  display: inline-block;
  padding: 1%;
  margin: 1%;
  /* max-height: 50; */
}
.img {
  position: relative;
  text-align: center;
  color: black;
  width: 100%;
  margin: 0 auto;
  height: 70vh;
  z-index: -1;
  /* opacity: 0.7; */
}

h3, h4, h5 {
  text-shadow: 1px 1px #030303;
}




/* CSS */
.button-74 {
  background-color: #fbeee0;
  border: 2px solid #422800;
  border-radius: 30px;
  box-shadow: #422800 4px 4px 0 0;
  color: #422800;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 18px;
  padding: 0 18px;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-74:hover {
  background-color: #fff;
}

.button-74:active {
  box-shadow: #422800 2px 2px 0 0;
  transform: translate(2px, 2px);
}

@media (min-width: 768px) {
  .button-74 {
    min-width: 120px;
    padding: 0 25px;
  }
}
</style>
