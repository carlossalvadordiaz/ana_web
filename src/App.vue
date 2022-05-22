<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Volver al inicio</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Handlee&display=swap');
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Handlee', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
/* background: rgb(158,218,203);
background: linear-gradient(90deg, rgba(158,218,203,1) 0%, rgba(41,186,163,1) 35%, rgba(43,17,177,0.7567401960784313) 100%); */
background-image: url("./assets/prueba.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

}

#app::before {
background-color: rgba(0,0,0,0.25);
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: black;
}

#nav a.router-link-exact-active {
  color: black;
}
</style>
