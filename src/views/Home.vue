<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/animales.jpg">
    <HelloWorld msg="Bienvenido/a, conoce tu personalidad a través de estos tests"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
