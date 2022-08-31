<template>
<div>
  <HelloWorld></HelloWorld>
  <SecTion></SecTion>
  <FooterCompo></FooterCompo>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import FooterCompo from './components/FooterCompo.vue'
import SecTion from './components/SecTion.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    FooterCompo,
    SecTion
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
