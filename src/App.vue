<template>
  <div id="app">
    <div class="nav">
  <ul>
    <li><router-link to="/">Volver al inicio</router-link></li>
    <li><router-link to="/animales">Animales de poder</router-link>
    <li>
      <router-link to="/zodiaco">Zodiaco</router-link>
    </li>
    <li><router-link to="/famosos">Famosos</router-link></li>
    <li><router-link to="/about">Sobre mi</router-link></li>
  </ul>
</div>
    <!-- <div id="nav">
      <router-link to="/">Volver al inicio</router-link>
    </div> -->
    <router-view/>

    <h3 style="margin-top: 20%">Pagina web creada por Ana García Romero de Ávila para la asignatura web 2.0 y Competencia Digital en Educación</h3>
  </div>

  
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Handlee&display=swap');

/* This first section is a simple "reset". It allows the navbar to push up against the top of the browser window with no white space around it. This code also sets the default font for your whole page. Put it at the very top of your css page.  */
/* html, body, div, p, ul, li {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
} */

/* This class is applied to the containing div <div class="nav"> and is used to set the background color and height of the navbar */
.nav {
  background: lightblue;
  height: 60px; /* set same as height & line-height below */
}

/* This rule centers the nav items verticaly in the bar with the height and line height properties. Spacing between the nav items is controlled by setting right and left padding.  */
.nav li {
  display: inline-block;
  list-style: none;
  height: 60px; /* should be the same as line-height */
  line-height: 60px; /* should be the same as height */
  padding: 0 40px; /* "0" sets top and bottom padding to none */
}

/* :hover allows you change the background color of the nav items when you mouse over them. Play around with the transition value to change the speed of the hover transition. */
.nav li:hover {
  background: lightblue;
  transition: background .3s;
}

/* This rule is applied to the link <a> tag. It lets you turn off the link underline and set the link text color. */
.nav-link {
  color: white;
  text-decoration: none;
}
* {
  margin: 0;
  padding: 0;
}
#app {
  height: 100%;
  width: 100%;
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Handlee', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
/* background: rgb(158,218,203);
background: linear-gradient(90deg, rgba(158,218,203,1) 0%, rgba(41,186,163,1) 35%, rgba(43,17,177,0.7567401960784313) 100%); */
/* background-image: url("./assets/prueba.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto 100%; */

}

#app::before {
background-color: rgba(0,0,0,0.25);
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: white;
}
</style>
