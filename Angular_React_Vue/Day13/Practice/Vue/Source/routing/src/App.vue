<template>
<div id="app" class="mt-5 ms-4">
<button class="rounded bg-dark me-3"><router-link class="text-decoration-none text-white" to = '/10'>HelloWorld</router-link></button>
 <button class="rounded bg-dark me-3"> <router-link class="text-decoration-none text-white" to = '/home'>Home </router-link></button> 
  <button class="rounded bg-dark me-3 text-white  " @click="go">Goto HelloWorld</button>
  <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
  go(){
        this.$router.push('/home');
}
},

}

</script>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

</style>
