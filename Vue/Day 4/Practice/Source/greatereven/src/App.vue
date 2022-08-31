<template>
<div>
  <HelloWorld />
  <hr>
  <EvEn />
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import EvEn from './components/EvEn.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    EvEn
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
