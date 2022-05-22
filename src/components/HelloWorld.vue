<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
      En esta página encontrarás tests para definir tu animal de poder y tu media naranja, según aspectos de tu personalidad
    <h3>Conoce tu animal de poder</h3>
    <ul>
      <li><router-link to="/animales">Haz click aquí</router-link></li>
    </ul>
    <h3>Conoce que signo del zodiaco sería tu media naranja</h3>
    <ul>
      <li><router-link to="/zodiaco">Haz click aquí</router-link></li>
    </ul>
    <h3>Pagina web creada por Ana García Imbécil de Avila</h3>
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
  /* border: 1px solid black; */
  /* padding: 10px; */
}
a {
  color: black;
  
}
</style>
