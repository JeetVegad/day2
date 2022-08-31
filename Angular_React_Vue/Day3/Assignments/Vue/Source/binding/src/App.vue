<template>
  <HelloWorld />
  <hr>
  <LogIn />
  <hr>
  <SignUp />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import LogIn from './components/LogIn.vue'
import SignUp from './components/SignUp.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    LogIn,
    SignUp
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
