<template>
  <div class="hello">
    <h1>{{ msg.toUpperCase() }}</h1>
    
      <h2> En esta página encontrarás diferentes tests para definir a tu animal de poder, a tu media naranja y al famoso/a que te representa.</h2>
    <!-- <h3>CONOCE TU ANIMAL DE PODER</h3>
    <ul>
      <li><router-link to="/animales">Haz click aquí</router-link></li>
    </ul>
    <h3>CONOCE EL SIGNO DEL ZODIACO DE TU MEDIA NARANJA</h3>
    <ul>
      <li><router-link to="/zodiaco">Haz click aquí</router-link></li>
    </ul>
    <h3>CONOCE QUÉ FAMOSO TE REPRESENTA</h3>
    
      <li><router-link to="/famosos">Haz click aquí</router-link></li> -->
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello {
  width: 100%;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  text-shadow: 1px 1px #302f2f;
}
h1 {
  font-size: 50px;
	font-weight: 1200;
  color: whitesmoke;
   -webkit-text-stroke: 1px black;
   font-style: oblique;
   background-color: aliceblue;
}
h2 {
  font-size: 30px;
	font-weight: 700;
  color: whitesmoke;
   -webkit-text-stroke: 0.5px black;
   font-style: oblique;
   background-color: aliceblue;
   margin: 0px;
}
h3 {
  margin: 40px 0 0;
  
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  background-color: aliceblue;
  border: 1px solid black;
  padding: 5px;
  /* border: 1px solid black; */
  /* padding: 10px; */
}
a {
  color: black;
  
}
</style>
